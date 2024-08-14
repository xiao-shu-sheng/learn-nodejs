// node中定义全局变量
// node环境中使用global，浏览器环境中使用window， 新的api可以使用globalThis
global.name = "小书生"
globalThis.name = "临渊斋的小书生"

// node环境中不涉及DOM和BOM的API都可以使用
// 内置api
// dirname 当前文件所在的目录 file 文件名 extname 文件后缀
// 在type设置为module时无法直接使用__dirname,需要引入
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// 当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);

// 当前文件所在目录 绝对路径
const __dirname = dirname(__filename);

console.log(__dirname);  
console.log(__filename);

// 在type设置为commonjs时可以直接使用


// process 处理进程
console.log(process.argv)
setTimeout(() => {
    console.log("麻蛋，工资真低")
},5000)
setTimeout(() => {
    console.log("麻蛋，我要跳槽")
    process.exit()
},2000)
process.on('exit', ()=> {
    console.log('我退出')
})