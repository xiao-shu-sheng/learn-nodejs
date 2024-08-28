import fs from 'node:fs'
import jsyaml from 'js-yaml'
import express from 'express'
import knex from 'knex'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

const port = 9527
const app = express()
// 生成 JWT token 的秘密密钥
const SECRET_KEY = '脚踩西瓜皮，走到哪里是那里';

app.use(express.json()) //支持post

const sql_yaml = fs.readFileSync('./16.config.yaml', 'utf-8')
const sql_config = jsyaml.load(sql_yaml)

const db = knex({
  client: 'mysql2',
  connection: sql_config.db
})
// 生成 JWT token
function generateToken(user) {
  const payload = { account: user.account };
  const options = { expiresIn: '72h' }; // Token 有效期 1 小时
  return jwt.sign(payload, SECRET_KEY, options);
}

// 验证 JWT token 中间件
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // 没有提供 token

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Token 无效

    req.user = user; // 将解码后的用户信息添加到请求对象中
    next();
  });
}

app.post('/register', async (req, res) => {
  const { name, password, account } = req.body;

  // 生成并保存用户的哈希密码
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await db('user').insert({
    name,
    account,
    password:hashedPassword 
  })
  res.status(200).send('注册成功');
});


app.post('/login', async (req, res) => {
  const { account, password } = req.body;
  const data = await db('user').select('*').where({account})
  if(data.length == 0) {
    return res.status(400).send('用户未注册');
  }
  const user = data[0];
  
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send('密码不正确');
  }

  const token = generateToken(user);
  res.status(200).json({ ...user, token });
});

// 受保护接口
app.get('/protected', authenticateToken, (req, res) => {
  res.send(`Hello ${req.user.username}, this is a protected route`);
});

app.post('/userAuth/getImg', async(req,res) => {
  const {
    companyName,
    cardType,
    serverId,
    uscc,
    area,
    street,
    name,
    phone,
    smsCode,
    type
  } = req.body
  await db('user').insert({

  }).where({id: 1})
})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})