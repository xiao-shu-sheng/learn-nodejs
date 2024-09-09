/* class Vehicle {}
// 继承类
class Bus extends Vehicle{}

let b = new Bus()

console.log(b instanceof Bus)
console.log(b instanceof Vehicle)


function Person() {}
// 继承普通构造函数
class Engineer extends Person {}

let e = new Engineer()

console.log(e instanceof Person)
console.log(e instanceof Engineer) */

/* class Vehicle {
  identifyPrototype(id) {
    console.log(id, this)
  }
  static indentifyClass(id) {
    console.log(id, this)
  }
}

class Bus extends Vehicle {}

let v = new Vehicle()
let b = new Bus()

b.identifyPrototype('bus')
v.identifyPrototype('vehicle')

Vehicle.indentifyClass('vehicle')
Bus.indentifyClass('bus') */

/* class Vehicle {
  constructor() {
    this.hasEngine = true
  }
}

class Bus extends Vehicle {
  constructor() {
    // 不要在调用super()之前引用this, 否则会抛出ReferenceError
    super()
    console.log(this instanceof Vehicle)
    console.log(this)
  }
}

new Bus() */

/* class Vehicle {
  constructor(name) {
    this.name = name
  }
  static indentify() {
    console.log('vehicle')
  }
}

class Bus extends Vehicle {
  constructor(name) {
    super(name)
  }
  static indentify() {
    // super只能在派生类构造函数和静态方法中  
    super.indentify()
    console.log('mother fuck')
  }
}

let b = new Bus('大黄')
console.log(b.name) */

/* class Vehicle {
  constructor() {
    console.log(new.target)
    if (new.target === Vehicle) {
      throw new Error("Cannot construct Vehicle instances directly")
    }
    if(!this.foo) {
      throw new Error("Inherting class must define foo()")
    }
    console.log('success')
  }  
}

class Bus extends Vehicle {
  foo() {}
}

new Bus()

class Van extends Vehicle {}

new Van() */

/* 
class SuperArray extends Array {
  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      console.log(i, j);
      [this[i], this[j]] = [this[j], this[i]];
    }
  }
}
let a = new SuperArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
a.shuffle()
console.log(a) */

/* 
// 默认情况下，类构造函数会在执行之后返回 this 对象
class Person {
  constructor(name) {
    console.log(arguments.length)
    this.name = name
  }
}

let p1 = new Person('a')
let p2 = new Person('b', 'c')
console.log(p1, p2, p1.name, p2.name) */


/* class Person {
  constructor(override) {
    this.foo = 'foo'
    if (override) {
      return {
        bar: 'bar'
      }
    }
  }
}

let p = new Person(true)
console.log(p)
let p2 = new Person(false)
console.log(p2)

 */

// 类构造函数与构造函数的主要区别是，调用类构造函数必须使用 new 操作符，而普通构造函数如果 不使用 new 调用，那么就会以全局的 
// this(通常是 window)作为内部对象。调用类构造函数时如果 忘了使用 new 则会抛出错误:

/* 
function Person() {}
class Animal {}

let p = Person()
// 类型错误: 类调用的时候不能省略 new
// ECMAScript 中没有正式的类这个类型。从各方面来看，ECMAScript 类就是一种特殊函数
// 通过 typeof 操作符检测类标识符，表明它是一个函数
console.log(typeof Person, typeof Animal)
let a = Animal()
 */

/* 
// 类标识符有 prototype 属性，而这个原型也有一个 constructor 属性指向类自身
class Person{}
console.log(Person.prototype === new Person().__proto__)
console.log(Person === Person.prototype.constructor)
 */

/* 
class Person{}
// 与普通构造函数一样，可以使用 instanceof 操作符检查构造函数原型是否存在于实例的原型链中
let p = new Person()
console.log(p instanceof Person) */

/* 
class Person {}
let p1 = new Person();
console.log(p1.constructor === Person);  // true
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Person.constructor);  // false
let p2 = new Person.constructor();
console.log(p2.constructor === Person); // false
console.log(p2 instanceof Person); // true
console.log(p2 instanceof Person.constructor);  // true
console.log(Person === Person.constructor); // false
console.log(Person === Person.prototype.constructor); // true
console.log(Person.constructor === Person.prototype.constructor); // false
console.log(Person.constructor instanceof Function); // true */

/* class Person {
  set name(name) {
    this._name = name
  }
  get name() {
    return this._name
  }
}
let p = new Person()
p.name = 'a'
console.log(p.name) */


/* class Person {
  constructor() {
    this.nickname = ['大头', '小黄', '小蓝', '小红']
  }
  *[Symbol.iterator]() {
    yield* this.nickname.entries();
  }
}

let p = new Person()
for (let [index, item] of p) {
  console.log(index, item)
} */


/* const obj = {
  name: 'a',
  age: 18,
  length: 4,
  [Symbol.iterator]: function() {
    let index = 0
    const self = this
    return {
      next: () => {
        if (index < self.length) {
          return {
            value: self.name + self.age + index++,
            done: false
          }
        } else {
          return {
            value: undefined,
            done: true
          }
        }
        
      }
    }
  },
  push: function(newName, newAge) {
    // 添加新的name和age并递增length
    this[this.length] = { name: newName, age: newAge };
    this.length++;
  }
}

for (let item of obj) {
  console.log(item)
}

obj.push('b', 20)

console.log(obj) */
/* 
class Vehicle{}
let FooMixin = (SuperClass) => class extends SuperClass {
  foo() {
    console.log('foo')
  }
}

let BarMixin = (SuperClass) => class extends SuperClass {
  bar() {
    console.log('bar')
  }
}

let BazMixin = (SuperClass) => class extends SuperClass {
  baz() {
    console.log('baz')
  }
}
// 通过写一个辅助函数，可以把嵌套调用展开：
function mix(BaseClass, ...mixins) {
  return mixins.reduce((acc, mixin) => mixin(acc), BaseClass)
}

class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}

let b = new Bus()
b.foo()
b.bar()
b.baz() */

/* const target = {
  name: '小明同学',
  age: 18,
}
const handler = {}

const proxy1 = new Proxy(target, handler)

console.log(proxy1)
console.log(proxy1.name)

const proxy2 = new Proxy(target, {
  get(target, key, receiver) {
    console.log('get')
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    console.log('set')
    return Reflect.set(target, key, value, receiver)
  }
})

proxy2.name = '小红同学'
console.log(proxy2)

console.log(target.hasOwnProperty('name'))
console.log(proxy1.hasOwnProperty('name'))
console.log(proxy2.hasOwnProperty('name'))

console.log(Proxy.prototype)//undefined

// Proxy.prototype = {
//   getPrototypeOf(target) {
//     console.log('getPrototypeOf')
//     return Reflect.getPrototypeOf(target)
//   },
//   setPrototypeOf(target, value) {
//     console.log('setPrototypeOf')
//     return Reflect.setPrototypeOf(target, value)
//   }
// }

// console.log(Proxy.prototype)

// Proxy.prototype是undefined,因此不能使用instanceof来判断
console.log(Proxy.prototype instanceof Object)
// Function has non-object prototype 'undefined' in instanceof check
// console.log(target instanceof Proxy)  */

/* 
const target = {
  name: '小明同学',
  age: 18,
}
const handler = {
  // 这个操作在JavaScript 代码中可以通过多种形式触发并被get()捕获
  // proxy[property]、proxy.property 或Object.create(proxy)[property]
  // 等操作都会触发基本的get()操作以获取属性
  get() {
    return '叫爸爸，不然爸爸就不爱你了'
  }
}


const proxy = new Proxy(target, handler)
console.log(target.name)
console.log(proxy.name) // 叫爸爸，不然爸爸就不爱你了

console.log(target['name'])
console.log(proxy['name'])

console.log(Object.create(target).name)
console.log(Object.create(target)['name'])
console.log(Object.create(proxy).name)
console.log(Object.create(proxy)['name'])

 */

/* 
const target = {
  name: '小明同学', 
  age: 18
}

const handler = {
  get(trapTarget, key, receiver) {
    console.log(trapTarget === target)
    console.log(key)
    console.log(receiver === proxy)
    console.log(trapTarget === receiver)
    return '叫爸爸，不然爸爸就不爱你了'
  }
}

const proxy = new Proxy(target, handler)
proxy.name

 */
/* 
const target = {
  name: '小明同学', 
  age: 18
}

const handler = {
  get(trapTarget, key, receiver) {
    // aximum call stack size exceeded
    // beacause the proxy object doesn't have a name property
    console.log(receiver[key])
    return trapTarget[key]
  }
}

const proxy = new Proxy(target, handler)
console.log(proxy.name)
console.log(target.name)
 */


const target = {
  name: '小明同学', 
  age: 18
}

const handler = { 
  get(trapTarget, key, receiver) {
    return Reflect.get(trapTarget, key, receiver)
  },
  set(trapTarget, key, value, receiver) {
    if(key === 'name' && value === '西瓜皮') {
      value = value + '，叫爸爸'
    }
    return Reflect.set(trapTarget, key, value, receiver)
  }
}
const proxy = new Proxy(target, handler)
// target.name = '西瓜皮'

proxy.name = '西瓜皮'
console.log(proxy.name, target.name) 














































