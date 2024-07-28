// fs
import fs from 'node:fs'
import fs2 from 'node:fs/promises'
// 读取文件 readFile flag
// 可读流 createReadStream
// 创建文件夹 recursive 递归
// 删除 rm
// 重命名 renameSync
// 监听文件变化watch
// 源码libuv
// 事件循环 setTimediate

// fs.readFile('./test.js', {
//     encoding: 'utf-8',
//     flag: 'r'
// },(err, data) => {
//     if(err) throw err
//     console.log(data)
// })

// 同步会阻塞代码, 返回的是二进制的buffer
// const result = fs.readFileSync('./test.js',{
//     encoding: 'utf-8',
//     flag: 'r'
// })
// console.log(result.toString())
// console.log('test')


// fs2.readFile('./test.js', {
//     encoding: 'utf-8',
//     flag: 'r'
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// 处理大文件
// const readStream = fs.createReadStream('./test.js')
// readStream.on('data', (chunk) => {
//     console.log(chunk.toString())
// })
// readStream.on('end', () => {
//     console.log('读取完成')
// })

// fs.mkdirSync('../src/js', {
//     recursive: true // 递归创建多层文件夹
// })
// fs.rmdirSync('../src/js', {
//     recursive: true // 递归删除多层文件夹
// })

//            原始名称      新名称
// Renames the file from oldPath to newPath. Returns undefined.
// fs.renameSync('./test.js', 'test2.js')

// fs.watch('./index.js',(event,filename) => {
//     console.log(event, filename)
// })