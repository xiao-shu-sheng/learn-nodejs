import fs from 'node:fs'
import zlib from 'node:zlib'

const gzip = zlib.createGzip()
const outStream = fs.createWriteStream('test.js.gz')
fs.createReadStream('./test.js').pipe(gzip).pipe(outStream)