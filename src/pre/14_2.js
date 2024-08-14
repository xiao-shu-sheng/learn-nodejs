import express from 'express'
import User from './14_1.js'
import LoggerMiddleware from '../../middleware/logger.js'

const app = express()
app.use(express.json()) // 中间件支持post解析json
app.use(LoggerMiddleware)
app.use('/user', User)
// // get
// // 第一个参数api的地址
// app.get('/form', (req, res) => {
//     console.log(req.query)
//     res.send('get')
// })

// // post
// app.post('/post', (req, res) => {
//     console.log(req.body)
//     res.send('post')
// })
// // 第一个参数api的地址
// app.get('/form/:id', (req, res) => {
//     console.log(req.params)
//     res.send('get')
// })

app.listen(3000, () => {
    console.log('我被监听了')
})



