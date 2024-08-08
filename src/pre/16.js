// 数据库 我这里用的是mysql vscode 中安装一个database client可以实现数据库可视化操作
// 我连的是本地的数据库，如果是别的话需要把host修改一下
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
})

connection.connect()

connection.query('select * from student', (error, results, fields) => {
    console.log(results, fields)
})