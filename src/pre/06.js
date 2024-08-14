// import process from "process";

import { pid } from "process"

// process 是nodejs操作当前进程和控制当前进程的api,并且是挂载到globalThis下面的全局api

// 获取cpu的架构 process.arch 和os获取的结果一致
console.log(process.arch)
// 获取操作系统的名称
console.log(process.platform)
// 获取进程后面的参数argv 返回的是数组
// 命令行输入node 06.js --version
// process.argv 中第一个参数是运行脚本的工具，第二个参数是运行文件，第三个是输入的参数--version
console.log(process.argv, process.argv.includes('--version') ? '1.0.0': '叫爸爸')

// cwd 获取工作目录和dirname类似 获取的是绝对路径
// 在esm模式下用不了__dirname,可以使用cwd代替
// console.log(process.cwd(), __dirname, __filename)


// 性能优化，获取内存信息memoryUsage 返回的是个对象
console.log(process.memoryUsage())
// {
//     rss: 30203904,  //常驻集大小，物理内存的存量
//     heapTotal: 5644288, // v8分配的堆内存的大小包括未使用的
//     heapUsed: 5089344, // 已经使用的内存
//     external: 569650, // 外部的内存 c或者c++使用的
//     arrayBuffers: 12696 // 二进制的总量
//   }


// exit 退出进程
// setTimeout(()=> {
//     console.log('我被两秒钟的给杀掉了')
// }, 5000)
// process.on('exit', () => {
//     console.log("沙雕进程退出了")
// })
// setTimeout(()=> {
//     console.log('杀掉那个五秒的')
//     process.exit()
// }, 2000)

// kill 杀死进程 需要参数pid 进程的id
// setTimeout(() => {
//     console.log('我被kill了');
// }, 5000);


// setTimeout(() => {
//     console.log('准备发送 SIGTERM 信号');
//     // SIGTERM (Signal Terminate)： 请求程序正常终止; 使用场景：通常用来安全地关闭程序
//     // SIGINT (Signal Interrupt)：中断进程;使用场景：用户希望中断正在运行的程序（如运行中的脚本或命令）
//     // SIGHUP (Signal Hang Up)：挂起信号;使用场景：传统上用于在用户断开终端连接时通知进程
//     process.kill(process.pid, 'SIGTERM');
// }, 2000);

// process.on('SIGTERM', () => {
//     console.log('沙雕进程kill了');
// });
// console.log('程序启动成功');



// env环境变量 获取操作系统所有的环境变量
// 获取的是操作系统内环境变量的内容
// 区分开发环境 生产环境 http https
// 使用 cross-env
// 原理 跨平台的 windows 使用set设置环境变量 如果是mac/linux 会调用posix export设置环境变量
console.log(process.env.NODE_ENV)


