// 数据库 我这里用的是mysql vscode 中安装一个database client可以实现数据库可视化操作
// 我连的是本地的数据库，如果是别的话需要把host修改一下
import mysql2 from 'mysql2/promise'
import fs from 'node:fs'
import jsyaml from 'js-yaml'
import express from 'express'

const port = 3000
const app = express()

app.use(express.json()) //支持post

const sql_yaml = fs.readFileSync('./16.config.yaml', 'utf-8')
const sql_config = jsyaml.load(sql_yaml)


const sql = await mysql2.createConnection({
    ...sql_config.db
})


app.get('/', async (req, res) => {
    const  [data] = await sql.query('select * from user')
    console.log('data', data)
    res.send(data)
    
})
app.get('/user/:id', async (req, res) => {
    // const  [data] = await sql.query(`select * from user where id = ${req.params.id}`)
    const  [data] = await sql.query('select * from user where id = ?', [req.params.id])
    console.log('data', data[0])
    res.send(data)
    
})

app.post('/add', async (req, res) => {
    const {name, age, address, hobby, gender} = req.body
    await sql.query(`insert into user(name, age, address, hobby, gender) values(?,?,?,?,?)`, [name, age, address, hobby, gender])
    res.send('添加成功')
})


app.post('/update', async (req, res) => {
    const {id, hobby} = req.body
    await sql.query(`update user set hobby = '${hobby}' where id = ${id}`)
    res.send('修改成功')
})

app.delete('/delete', async (req, res) => {
    const {id} = req.body
    await sql.query(`delete from user where id = ${id}`)
    res.send('删除成功')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})