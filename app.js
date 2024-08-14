import express from 'express'


const app = express()


// get
// 第一个参数api的地址
app.get('/get', (req, res) => {
    res.send('get')
})

// post
// 第一个参数api的地址
app.get('/post', (req, res) => {
    res.send('post')
})

app.listen(3000, () => {
    console('我被监听了')
})