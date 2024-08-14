// path不同操作系统不一致(window|posix)
// window使用反斜杠(\)作为路径分隔符,而posix使用正斜杠(/)作为分隔符
import path from 'node:path' // const path = require('node:path')

// basename 返回给定路径的最后一部分
// window兼容正斜杠的写法
// posix处理不了windows的路径
console.log(path.basename('./test.js'))
// 解析windows路径
console.log(path.win32.basename('.\\test.js'))


// dirname 返回除了最后一个以外的其他路径
console.log(path.dirname('/src/test.js'))
console.log(path.win32.dirname('\\src\\test.js'))


// extname 返回后缀名 返回值带点的 如果没有. 返回空字符串 如果有多个点返回最后一个
console.log(path.extname('test.js'))


// path.json()拼接路径
console.log(path.join('/src', '/test.js'))

// path.resove()解析路径，返回的是绝对路径
// 如果有多个，返回最后一个
// 如果只有一个相对路径，返回当前工作目录的绝对路径
console.log(path.resolve('./test.js'))


// path.parse()解析路径 返回一个对象 path.format() 逆向操作
console.log(path.parse('G:\learn-nodejs\src\test.js'))
// {
//     root: 'G:', 根目录
//     dir: 'G:', 文件所在路径
//     base: 'learn-nodejssrc\test.js', 文件名加后缀名
//     ext: '.js', 后缀名
//     name: 'learn-nodejssrc\test'  文件名
//   }

//     root: 'G:', 根目录
console.log(path.format({
    root: 'G:',
    dir: 'G:',
    base: 'learn-nodejssrc\test.js',
    ext: '.js',
    name: 'learn-nodejssrc\test'
  }))


// path.sep window返回 \ posix返回/
console.log(path.sep)