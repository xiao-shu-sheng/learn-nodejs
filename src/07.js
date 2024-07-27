// childd_process
// 子进程 nodejs 的核心api
import { exec, execSync, spawn, spawnSync, execFile, execFileSync, fork } from "child_process"
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';


// 类似 exec, execSync 这种的，带有Sync的后缀一般是同步的，不带的是是异步的
// exec, execSync可以用来执行shell命令，用来跟软件进行交互， 有字节上限的
// exec(command, [options], callback)
// exec('node -v', (err, stdout, stderr) => {
//     if(err) {
//         return err
//     }
//     console.log(stdout.toString()) // 返回的是buffer
// })

// const nodeVersion = execSync('node -v') // buffer
// console.log(nodeVersion.toString())
// execSync('start chrome http://www.baidu.com') // 打开谷歌的进行百度


// 用于执行一些实时获取的信息因为spawn返回的是流边执行边返回，
// exec是返回一个完整的buffer，buffer的大小是200k，如果超出会报错，而spawn是无上限的
// 使用execSync会卡住，等命令执行完才会显示，而spawn返回是实时的
// spawn在执行完成后会抛出close事件监听，并返回状态码，通过状态码可以知道子进程是否顺利执行。
// exec只能通过返回的buffer去识别完成状态，识别起来较为麻烦
//                       命令      参数  options配置
// const {stdout} = spawn('netstat', ['-a'], {}) //带参数的
// spawn options 配置项
// cwd <string> 子进程的当前工作目录。
// env <Object> 环境变量键值对。
// encoding <string> 默认为 'utf8'。
// shell <string> 用于执行命令的 shell。 在 UNIX 上默认为 '/bin/sh'，在 Windows 上默认为 process.env.ComSpec。 详见 Shell Requirements 与 Default Windows Shell。
// timeout <number> 默认为 0。
// maxBuffer <number> stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止。 查看警告： maxBuffer and Unicode。
// killSignal <string> | <integer> 默认为 'SIGTERM'。
// uid <number> 设置该进程的用户标识。
// gid <number> 设置该进程的组标识。

// stdout.on('data', (msg) => {
//     console.log(msg.toString())
// })
// stdout.on("close", () => {
//     console.log("我爽了，结束了")
// })

// spawnSync 用的比较少


// execFile执行可执行文件
// execFile(file[, args][, options][, callback])
// file <string> 要运行的可执行文件的名称或路径。
// args <string[]> 字符串参数列表

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const resolvedPath = path.resolve(__dirname, '07.bat');
// console.log('Resolved Path:', resolvedPath);
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//     if (error) {
//       throw error;
//     }
//     console.log(stdout);
// });

// fs.access(resolvedPath, fs.constants.X_OK, (err)=>{
//     if(err) {
//         console.error(`File is not executable or doesn't exist: ${resolvedPath}`);
//     }else {
//         // 报错的话在/.vscode/.debug.script.mjs文件中spawn函数下增加shell：true参数即可解决
//         execFile(resolvedPath,(err, stdout, stderr)=>{
//             if (err) {
//                 console.error('%c Error executing file:', 'color: red;', err);
//                 return;
//             }
//             if (stderr) {
//                 console.error('%c Stderr output:', 'color: red;', stderr);
//             }
//             console.log('Stdout output:', stdout.toString());
//         })
//     }
// })


// 底层实现顺序 exec--> execFile-->spawn


// fork 只能接收js模块 fork(modulePath[, args][, options]) 
// fork方法是 [child_process.spawn()] 的一个特殊情况，专门用于衍生新的 Node.js 进程
// 衍生一个新的 Node.js 进程，并通过建立 IPC 通讯通道来调用指定的模块，该通道允许父进程与子进程之间相互发送信息

const testProcess = fork('./test.js')
// testProcess.send('call me father')
testProcess.on('message', (msg) => {
    console.log(msg)
})