// CSR SSR SEO


// 借助三方库来操作dom和bom jsdom
import {JSDOM} from 'jsdom'
import fs from 'node:fs'

const root = new JSDOM(`
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <div id='app'>叫爸爸</div>
        </body>
    </html>
`)

const window = root.window
const document = window.document

// 请求一个接口 拿到数据填充到app里面
// fetch是在node 18版本之后才有的 用法和浏览器一样
const app = document.querySelector('#app')
fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(el => {
            const img = document.createElement('img')
            img.src = el.url
            img.style.width = '200px'
            img.style.height = '200px'
            app.appendChild(img)
        });
        // 第一个参数文件路径 第二个参数是要写入的内容
        fs.writeFileSync('./index.html', root.serialize())
        console.log(root.serialize()) //查看拼装后的内容
    })

// 上面的内容为SSR 服务端渲染 toC

// CSR 客户端渲染 vue react spa(单页面应用) 做后台管理系统toB

// seo必做的三件事<title></title>、<meta name="description" content="xxx"/> <meta name="Keywords" content="xxx"/>