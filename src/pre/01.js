// package.json  type: commonjs  
// 五种模式

// 1.引入自己编写的模块
// require("../index.js")
// 2.引入第三方模块
// const md5 = require("md5")
// console.log(md5("123"))

// 3.引入nodejs内置模块 fs http net os child_process
// const path = require("path")
// console.log(path.resolve(__dirname, "index.js"))

// 4.c++扩展 addon napi node-gyp .node

// 5.引入json文件
// const pkg = require("../package.json")
// console.log(pkg)


// 导出
// module.exports = '123'
// module.exports = () => {
//   return '叫爸爸'
// }
// module.exports = {
//   name: "learn-nodejs",
//   version: "1.0.0",
//   description: "nodejs学习",
//   main: "index.js",
//   scripts: {
//     predev: "node prev.js",
//     dev: "node index.js",
//     postdev: "node post.js"
//   },
//   cb: () => {
//     console.log("我是回调函数")
//   }
// }



// es module package.json  type: module
// export default 只能有一个
// export default {
//   name: "learn-nodejs",
//   version: "1.0.0",
//   description: "nodejs学习",
//   main: "index.js",
//   scripts: {
//     predev: "node prev.js",
//     dev: "node index.js",
//     postdev: "node post.js"
//   },
//   cb: () => {
//     console.log("我是回调函数")
//   }
// }
// export const a = 123



// Cjs是基于运行时的同步加载 esm是基于运行时的异步加载
// Cjs是可以修改值的，esm是不能修改值的（可读的）
// Cjs不可以tree shaking，esm可以tree shaking
// commonjs中顶层的this指向模块本身， 而ES6中顶层的this指向undefined, 浏览器中指向的是window
console.log(this)


if(true) {
    import('./test.js').then(res => { // 动态引入: 使用import函数模式
        console.log(res)
    })
}