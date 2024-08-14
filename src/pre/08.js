// nodejs核心api都是采用异步事件来驱动的，简单来说就是通过有效的方法来监听事件状态的变化，并在变化的时候做出相应的动作
import eventEmitter from 'events' 
// 用法跟vue2 event bus 类似 第三方库 mitt 采用发布订阅模式
// 发布订阅模式 off on emit once 


const bus = new eventEmitter()
// 事件的默认只能监听10个，如果要监听更多需要使用setMaxListeners
// bus.setMaxListeners(20);
// console.log(bus.getMaxListeners()) //获取监听事件的最大个数
// bus.on('test', (val) => {
//     console.log(val)
// })
// bus.emit('test', 'fuck')
// bus.emit('test', 'call me father')

// bus.once('fuck', (val) => {
//     console.log(val)
// })
// bus.emit('fuck', 'who')
// bus.emit('fuck', 'you')



// class Vb {
//     constructor(value) {
//         this.value = value;
//     }
// }
// Vb.prototype.name = 'vb';

// let vb = new Vb('1');
// console.log(vb.name); // 'vb'
// console.log(Object.getPrototypeOf(vb)); // Vb { name: 'vb' }

// 面试题可能会问到的
let fn = function() {}
fn.prototype.test = 111
fn.prototype.name = 'fb'
let a = new fn()
a.name = 'a'
// 会报错的
// 实例对象 a 没有 prototype 属性，所以尝试访问 a.prototype 会报错
// a.prototype.name = 'a' 
// 返回的是 a 的原型对象，也就是 fn.prototype
console.log(Object.getPrototypeOf(a))
//  返回的是 fn 的原型对象，默认为 Function.prototype
console.log(Object.getPrototypeOf(fn))
//  返回的是函数 fn 的名称，这个值是只读的
// fn.name 是函数的内置属性，表示函数的名称
console.log(fn.name)
// fn.prototype.name 是原型对象上的一个普通属性，可以随意读取和修改
console.log(fn.prototype.name)
// 直接访问实例 a 的 name 属性
console.log(a.name)