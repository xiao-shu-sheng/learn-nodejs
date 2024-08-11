import express from 'express'

const app = express()
const whiteList = [] // 配置网址
// app.use(express.static('xxx')) // 需要访问的静态资源的目录
const prevemtHotLinking = (req, res, next) => {
    // referer 如果直接打开的资源是获取不到referer,需要发起请求
    const referer = req.get('referer')
    if(referer) {
        const { hostname } = new URL(referer)  // 获取主机
        if(whiteList.includes(hostname)) {
            next()
        } else {
            res.send('么得')
            return
        }
    }
}
app.use(prevemtHotLinking)

app.listen(3000, () => {
    console.log('baba start')
})