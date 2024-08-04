import http from 'node:http'
import url from 'node:url';
import { StringDecoder } from 'node:string_decoder';

const port = '8080'

// req接收信息， res返回信息
const server = http.createServer((req, res) => {
    const {pathName, query} = url.parse(req.url, true)
    if(req.method === 'POST') {
        console.log( '接收到post')
         // 用于接收请求体数据
         let data = '';
         const decoder = new StringDecoder('utf-8');
         
         req.on('data', chunk => {
            data += decoder.write(chunk);
         });
         req.on('end', () => {
            console.log(data, '接收内容')
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200
            res.end('mother fuck')
         })
        
        
    }else if(req.method === 'GET') {
        console.log('接收到get')
        console.log(query, 'query')
    }
})

server.listen(port);