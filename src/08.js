// nodejs核心api都是采用异步事件来驱动的，简单来说就是通过有效的方法来监听事件状态的变化，并在变化的时候做出相应的动作
import eventEmitter from 'events' 
// 用法跟vue2 event bus 类似 第三方库 mitt 采用发布订阅模式
// 发布订阅模式 off on emit once 


const bus = new eventEmitter()
// 事件的默认只能监听10个，如果要监听更多需要使用setMaxListeners
bus.setMaxListeners(20);
console.log(bus.getMaxListeners()) //获取监听事件的最大个数
bus.on('test', (val) => {
    console.log(val)
})
bus.emit('test', 'fuck')
bus.emit('test', 'call me father')

bus.once('fuck', (val) => {
    console.log(val)
})
bus.emit('fuck', 'who')
bus.emit('fuck', 'you')