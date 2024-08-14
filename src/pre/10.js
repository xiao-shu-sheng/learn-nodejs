// fs
import fs from 'node:fs'
import fs2 from 'node:fs/promises'
// 读取文件 readFile flag
// 可读流 createReadStream
// 创建文件夹 recursive 递归
// 删除 rm
// 重命名 renameSync
// 监听文件变化watch
// 写入文件、追加写入
// 创建可写流
// 软连接 硬链接
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


fs.writeFileSync("./test.js", "\nconsole.log('mother fuck')", {
    flag: 'a'
})

fs.appendFileSync("./test.js", "\nconsole.log('阿西吧')", {
    flag: 'a'
})


// 创建可写流， 处理大量数据
// let writeStream = fs.createWriteStream('./test.txt')
// const ary = [
//     '二八佳人体似酥',
//     '腰间仗剑斩愚夫',
//     '虽然不见人头落',
//     '暗里教君骨髓枯'
// ]
// ary.forEach(i => {
//     writeStream.write(i + '\n')
// })
// writeStream.end()
// writeStream.on('finish',() => {
//     console.log('我写完了')
// })


// 硬链接
//          原始地址       硬链接之后的地址  共享/备份
// fs.linkSync('./test.txt', './test2.txt')


// 软连接 类似windows的快捷方式 需要管理员权限
fs.symlinkSync('./test.txt', './test2.txt')

