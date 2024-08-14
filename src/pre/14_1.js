import express from 'express'
// 模块化拆分
const router = express.Router()

router.post('/login', (req, res) =>{
    console.log(req.body)
    res.json({
        code: 200,
        msg: '登录成功'
    })
})
router.post('/register', (req, res) =>{
    console.log(req.body)
    res.json({
        code: 200,
        msg: '登录成功'
    })
})


export default router