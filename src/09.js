import util from 'node:util'
import { exec } from 'node:child_process'


// exec('node -v', (err, stdout, stderr) => {
//     if(err) {
//         return err
//     }
//     console.log(stdout)
// })

// const execPromise = util.promisify(exec)
// const nodeV = execPromise('node -v')
// nodeV.then(res => {
//     // rer { stdout: 'v18.20.3\r\n', stderr: '' }
//     console.log(res, res.stdout)
// }).catch(err => {
//     console.log(err)
// })


// 实现promisefy,高阶函数
// const promisify = (fn) => {
//     return (...args) => {
//         return new Promise((resolve, reject) => {
//             fn(...args, (err, ...values) =>{
//                 if(err) {
//                     reject(err)
//                 }
//                 if(values && values.length > 1) {
//                     let obj = {}
//                     for(let key in values) {
//                         // 拿不到symbol的key, kCustomPromisifyArgsSymbol没有提供对外接口
//                         obj[key] = values[key]
//                     }
//                     resolve(obj)
//                 }else {
//                     resolve(values)
//                 }
//             })
//         }) 
//     }
// }
// const execPromise = promisify(exec)
// const nodeV = execPromise('node -v')
// nodeV.then(res => {
//     // rer { stdout: 'v18.20.3\r\n', stderr: '' }
//     console.log(res, res.stdout)
// }).catch(err => {
//     console.log(err)
// })


// const fn = (type) => {
//     if(type == 1) {
//         return Promise.resolve('success')
//     }else {
//         return Promise.reject('error')
//     }
// }

// const callback = util.callbackify(fn)
// callback(2, (err, value) => {
//     console.log(err, value)
// })

// const callbackify = (fn) => {
//     return (...args) => {
//         let callback = args.pop()
//         fn(...args).then(res => {
//             callback(null, res)
//         }).catch(err => {
//             callback(err)
//         })
//     }
// }
// const fn = (type) => {
//     if(type == 1) {
//         return Promise.resolve('success')
//     }else {
//         return Promise.reject('error')
//     }
// }

// const callback = callbackify(fn)
// callback(2, (err, value) => {
//     console.log(err, value)
// })

const str = util.format('%s --- %s', 'mother', 'fuck')
console.log(str)