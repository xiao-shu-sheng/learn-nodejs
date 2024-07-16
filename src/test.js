// 01.js
// import obj, {a} from './01.js'

// console.log(obj, a)


// 不知道名字的时候导出所有的
// import * as all from './01.js'

// console.log(all)

// 重名的时候
// import obj, {a as bb} from './01.js'
// console.log(obj, bb)

// esm 不支持引入json文件
// 强行支持需要node 18高版本 会有警告 但是可以用
// import pkg from './package.json' assert { type: 'json' }
// console.log(pkg)
