import os from 'node:os'
import { exec } from 'node:child_process'

// platform获取操作系统平台 win32 windows darwin mac linux
console.log(os.platform())
// release 获取操作系统的版本号
console.log(os.release())
// 直接获取系统 
// For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.log(os.type())
// 获取系统版本 Returns a string identifying the kernel version.
console.log(os.version())

// 使用场景
// webpack vite rollup open:true 打开浏览器
// 实现原理：判断不同的操作系统，分别调用不同的shell命令
const platform = os.platform()
// exec可以执行shell命令的
const open = (url) => {
    if(platform === 'darwin'){
        // mac
        exec(`open ${url}`)
    } else if (platform === 'win32') {
        // windows
        exec(`start ${url}`)
    }else if (platform === 'linux') {
        // linux
        exec(`sdg-open ${url}`)
    }
}
// open('www.baidu.com')


// 获取用户目录
// 底层原理 windows %userprofile%; mac $HOME
console.log(os.homedir())

// 获取cpu架构， Android开发使用x64 x86
console.log(os.arch())

// 获取操作系统cpu的信息, 跟电脑性能有关， 计算cup的利用率
console.log(os.cpus())
// {
//     model: 'Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz',  // cpu型号
//     speed: 1696,  // cpu运行时钟的速度
//     times: {
//       user: 50332942,  // 用户索使用程序的时间
//       nice: 0, // 优先级比较低的用户的程序所使用的时间
//       sys: 16934844, //系统内核所使用的时间
//       idle: 279183632, // 空闲的时间
//       irq: 907738 // 硬件被中断所使用的时间
//     }
//   },
console.log(os.cpus().length)


// 获取网络信息, 敏感信息
console.log(os.networkInterfaces())
// {
//     address: '127.0.0.1',  // ip地址
//     netmask: '255.0.0.0',  // 子网掩码
//     family: 'IPv4', // ip版本 IPV4或者IPv6
//     mac: '00:00:00:00:00:00', //网卡的mac地址，不要暴露给别人看
//     internal: true, // 表示是不是内网ip
//     cidr: '127.0.0.1/8' //ip的地址段
//   }