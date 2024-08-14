import crypto from "node:crypto"
// 对称加密
// 双方协商定义一个秘钥以及iv


// 第一个参数algorithm 几首一个算法 aes-256-cbc
// 第二个参数key也就是秘钥 32位
// 第三个参数 iv初始化向量 支持16位 保证我们生成秘钥串每次是不一样的，秘钥串缺少位数可以进行不嘛操作
// Creates and returns a Cipher object, with the given algorithm, key and initialization vector (iv).

// let key = crypto.randomBytes(32)
// let iv = Buffer.from(crypto.randomBytes(16))
// const cipher = crypto.createCipheriv('aes-256-cbc',key,iv)
// //           密文       格式     输出格式
// cipher.update('叫爸爸','utf-8','hex')
// const result = cipher.final("hex")
// console.log(result)

// // 解密 相同的算法 相同的key 相同的iv
// const de = crypto.createDecipheriv('aes-256-cbc',key,iv)
// de.update(result, 'hex', 'utf-8')
// const su = de.final('utf-8')
// console.log(su)


// 非对称加密
// 生成公钥和私钥
// 私钥只能管理员拥有 不能对外公开
// 公钥可以对外公开

// const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
//     modulusLength: 2048, // 长度越长越安全，速度越慢
// })
// // 公钥加密
// const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('叫爸爸'))
// console.log(encrypted.toString('hex'))
// // 私钥解密
// const decrypted = crypto.privateDecrypt(privateKey, encrypted)
// console.log(decrypted.toString())


// 哈希函数不能被解密 单项不可逆的
// 不是很安全 具有唯一性
const hash = crypto.createHash('sha256') // md5
hash.update('叫爸爸')
console.log(hash.digest('hex'))