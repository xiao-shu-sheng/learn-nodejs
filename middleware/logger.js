// req 接收
// res 返回
// next 执行下一个中间件，如果不写会一直卡着
import log4js from "log4js"
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// 当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);

// 当前文件所在目录 绝对路径
const __dirname = dirname(__filename);

const logDirectory = path.join(__dirname, 'logs');
log4js.configure({
    appenders: {
        out: { // 控制台输出
            type: 'stdout',
            layout: {
                type: 'colored'
            }
        },
        file: {  // 文件输出
            filename: path.join(logDirectory, 'server.log'),
            type: 'file'
        }
    },
    categories: {
        default: {
            appenders: ['out', 'file'],
            level: 'debug'
        }
    }
})

const Logger = log4js.getLogger('default')
// 每一个请求都会进入中间件
const LoggerMiddleware = (req, res, next) => {
    Logger.debug(`[${req.method}] ${req.url}`)
    next()
}

export default LoggerMiddleware