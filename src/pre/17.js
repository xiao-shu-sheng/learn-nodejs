// 数据库 我这里用的是mysql vscode 中安装一个database client可以实现数据库可视化操作
// 我连的是本地的数据库，如果是别的话需要把host修改一下
// import mysql2 from 'mysql2/promise'
import fs from 'node:fs'
import jsyaml from 'js-yaml'
import express from 'express'
import knex from 'knex'

const port = 3000
const app = express()

app.use(express.json()) //支持post

const sql_yaml = fs.readFileSync('./16.config.yaml', 'utf-8')
const sql_config = jsyaml.load(sql_yaml)


// const sql = await mysql2.createConnection({
//     ...sql_config.db
// })

const db = knex({
    client: 'mysql2',
    connection: sql_config.db
})

// db.schema.hasTable('list', table => {
//     table.increments('id')
//     table.integer('age')
//     table.string('name')
//     table.string('hobby')
//     table.timestamps(true, true) // 创建时间 更新时间
// }).then(res => {
//     console.log('Table created or already exists:', res)
// }).catch(error => {
//     console.error('Error:', error)
// })

// db.schema.dropTable('list')
//     .then(() => {
//         console.log('Table dropped successfully')
//     })
//     .catch(error => {
//         console.error('Error:', error)
//     })

// db.schema.alterTable('user', table => {
//     table.integer('status').comment('当前状态')
// }).then(() => {
//     console.log('Table altered successfully')
// })
// .catch(error => {
//     console.error('Error:', error.message)
//     console.error('Full Error:', error)
// })

app.get('/', async (req, res) => {
    // const  [data] = await sql.query('select * from user')
    const data = await db.select('*').from('user')
    // db.raw('select * from user').then(data => {
    //     console.log(data)
    // })
    res.json({
        sql: db.select('*').from('user').toSQL.sql() //调试的时候可以用
    })
    res.send(data)
    
})
app.get('/user/:id', async (req, res) => {
    // const  [data] = await sql.query(`select * from user where id = ${req.params.id}`)
    // const  [data] = await sql.query('select * from user where id = ?', [req.params.id])
    const data = await db.select('*').from('user').where({id: req.params.id})
    res.send(data)
    
})

app.post('/add', async (req, res) => {
    const {name, age, address, hobby, gender} = req.body
    // await sql.query(`insert into user(name, age, address, hobby, gender) values(?,?,?,?,?)`, [name, age, address, hobby, gender])
    await db('user').insert({name, age, address, hobby, gender, status: 1})
    res.send('添加成功')
})


app.post('/update', async (req, res) => {
    const {id, hobby} = req.body
    // await sql.query(`update user set hobby = '${hobby}' where id = ${id}`)
    await db('user').update({hobby}).where({id})
    res.send('修改成功')
})

app.delete('/delete', async (req, res) => {
    const {id} = req.body
    // await sql.query(`delete from user where id = ${id}`)
    await db('user').delete().where({id})
    res.send('删除成功')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})