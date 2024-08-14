import nodemailer from 'nodemailer'
import yaml from 'js-yaml'
import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'
import { StringDecoder } from 'node:string_decoder';

const mailConfig = yaml.load(fs.readFileSync('./13.yaml', 'utf8'))
// https://wx.mail.qq.com/list/readtemplate?name=app_intro.html#/agreement/authorizationCode
// 初始化邮件服务
const transport = nodemailer.createTransport({
    service: 'qq', //服务商
    host: 'smtp.qq.com',
    port: 456,
    secure: true,
    auth: {
        pass: mailConfig.pass, //授权码
        user: mailConfig.user // 邮箱
    }
})

http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    const { method } = req
    if(method == 'POST' && pathname=='/send/mail') {
        let data = '';
        
        const decoder = new StringDecoder('utf-8');

        req.on('data', chunk => {
            data += decoder.write(chunk);
        });
        
        req.on('end', () => {
            
            const {to, subject, text} = JSON.parse(data)
            
            transport.sendMail({
                to, // 收件人
                from: mailConfig.user, // 发件人
                subject, //主题
                text // 内容
            })
            res.end('ok')
        })
    }
}).listen(3000, () => {
    console.log('listening on port 3000')
})