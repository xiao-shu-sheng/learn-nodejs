// npm config list 查看npm全局配置
// npm get registry 查看镜像
// npm config set registry https://registry.npmjs.org/ 设置镜像
// npm login 设置用户名和密码
// npm publish 上传包
// npm unpublish 删除包
// npm adduser 设置用户名和密码
// npm whoami 查看用户名
// npm whoami 设置用户名
// npm logout 注销登录
// npm whoami 查看用户名
// npm help 查看帮助
// npm ls -g 查看全局包
// npm ls 查看本地包


// nodejs 自己实现了一个console api 与浏览器的console api 不一样 能够使打印的内容可以在终端上看到
console.log(process.env.NODE_ENV == 'dev' ? '叫爸爸' :  'call me father')

/** 
 * 浏览器一帧60fps左右的， 1000/60 = 16.6ms
 * 1、处理用户事件、如click,input change
 * 2、执行定时器任务
 * 3、执行动画requestAnimationFrame
 * 4、执行dom回流与重绘
 * 5、计算更新图层的绘制指令
 * 6、绘制指令合并主线程
 */ 





