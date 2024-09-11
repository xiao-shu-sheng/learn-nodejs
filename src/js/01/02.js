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

/* class SuperArray extends Array {
  // 使用 Symbol.species 作为静态属性，来决定.map()、.filter() 等方法在执行时返回的实例类型
  static get [Symbol.species]() {
    return Array
  }
}

let arr = new SuperArray(1, 2, 3)
console.log(arr)
console.log(arr instanceof SuperArray)
console.log(arr instanceof Array)
let arr2 = arr.map(item => item + 1)
console.log(arr2)
console.log(arr2 instanceof SuperArray)
console.log(arr2 instanceof Array) */
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

/* 
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
 */


/* const target = {}
Object.defineProperty(target, 'foo', {
  configurable: false, // 不可配置
  enumerable: false, // 不可枚举
  writable: false, // 不可写
  value: 'bar'
})

const handler = {
  get() {
    return 'xxx'
  }
}

const proxy = new Proxy(target, handler)
console.log(proxy.foo) // TypeError
 */

/* const target = {
  foo: 'bar'
}
const handler = {
  get() {
    return '叫爸爸，不然爸爸就不爱你了'
  }
}
// 撤销函数和代理对象在实例化的时候同时生成的
const {proxy, revoke} = Proxy.revocable(target, handler)

console.log(proxy.foo)
console.log(target.foo)
// 撤销代理的 操作是不可逆的。而且，撤销函数(revoke())是幂等的，调用多少次的结果都一样。
// 撤销代理之后 再调用代理会抛出 TypeError
revoke()
console.log(proxy.foo) // TypeError
 */

/* 
const o = {}

try {
  Object.defineProperty(o, 'foo', 'bar')
  console.log('succcess')
}catch(e) {
  console.log('fail')
}
 */

/* 
const o = {}

if(Reflect.defineProperty(o, 'foo', {value: 'bar'})) {
  console.log('success')  
} else {
  console.log('fail')
} */

/*  
// 以下反射方法都会提供状态标记
Reflect.defineProperty() // 定义属性
Reflect.deleteProperty() // 删除属性
Reflect.preventExtensions() // 不可扩展
Reflect.setPrototypeOf() // 设置原型
// 用一等函数替代操作符
Reflect.get() // 可以替代对象属性访问操作符
Reflect.set() // 可以替代对=赋值操作符
Reflect.has() // 可以替代in或者with()操作符
Reflect.deleteProperty() // 可以替代delete操作符
Reflect.construct() // 可以替代new操作符
 */

/* const target = {
  name: '小明同学', 
  age: 18
}

const proxy = new Proxy(target, {
  has() {
    console.log('has')
    return Reflect.has(...arguments)
  }
})

console.log('name' in proxy)
 */

/* 
const myTarget = {
  name: '小明同学', 
  age: 18
}
// 创建一个用于存储代理对象自身属性的对象
const proxyStorage = {}

const proxy = new Proxy(myTarget, {
  defineProperty(target, key, descriptor) {
    console.log('defineProperty')
    return Reflect.defineProperty(proxyStorage, key, descriptor)
  },
  get(target, key) {
    // 如果代理对象自身有属性，则返回它，否则返回原始对象的属性
    return proxyStorage.hasOwnProperty(key) ? proxyStorage[key] : target[key]
  }
})
console.log(proxy.name)
console.log(myTarget.name)
Object.defineProperty(proxy, 'name', {
  value: '小红同学'
})
console.log(proxy.name)
console.log(myTarget.name)
 */

/* 
const myTarget = {
  name: '小明同学', 
  age: 18
}

const proxy = new Proxy(myTarget, {
  getOwnPropertyDescriptor(target, key) {
    console.log('getOwnPropertyDescriptor')
    return Reflect.getOwnPropertyDescriptor(target, key)
  }
})

console.log(Object.getOwnPropertyDescriptor(proxy, 'name'))
 */

/* 
const myTarget= {
  name: '小明同学', 
  age: 18
}

const proxy = new Proxy(myTarget, {
  deleteProperty(target, key) {
    console.log('deleteProperty')
    if(key === 'name') {
      console.warn('%c不能删除name属性', 'color: red')
      return true // 可以阻止 但不会删除
    }
    return Reflect.deleteProperty(target, key)
  }
})

delete proxy.name
console.log(proxy.name)
 */
/* 
const myTarget = {
  name: '小明同学', 
  age: 18
}
const  hiddentProperties = ['age']

const proxy = new Proxy(myTarget, {
  get(target, key) {
    if(hiddentProperties.includes(key)) {
      console.warn('%c不能获取到' + key + '属性', 'color: red')
      return '不能获取到' + key + '属性'
    }
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    if(key === 'name') {
      console.warn('%c不能设置' + key + '属性', 'color: red')
      return true
    }
    return Reflect.set(target, key, value)
  },
  ownKeys(target) {
    console.log('ownKeys')
    return Reflect.ownKeys(target)
  },
  getPrototypeOf(target) {
    console.log('getPrototypeOf')
    return Reflect.getPrototypeOf(target)
  }
})

console.log(Object.keys(proxy))

console.log(Object.getPrototypeOf(proxy))

console.log(proxy.name)

proxy.name = '小红同学'
 */

/* 
function median(...args) {
  return args.sort()[Math.floor(args.length / 2)]
}

const proxy = new Proxy(median, {
  apply(target, thisArg, args) {
    for(const arg of args) {
      if(typeof arg !== 'number') {
        throw new TypeError('median() only accepts numbers')
      }
    }
    return Reflect.apply(...arguments)
  }
})

// console.log(proxy(1, 2, 3, 4, "1", 6, 7, 8, 9, 10))
console.log(proxy(4, 7, 1));
 */

/* 
const userList = []

class User {
  constructor(name, age) {
    this._name = name
    this._age = age
  }
}

const proxy = new Proxy(User, {
  construct(target, args) {
    const user = new target(...args)
    userList.push(user)
    return user
  }
})

const user = new proxy('小明', 18)
user._name = '小红'
user._age = 19
console.log(userList)

 */


// 将集合绑定到分派程序中，框架实现的一种解决方案
/* 
const userList = [];
function emit(newValue) {
  console.log(newValue);
}
const proxy = new Proxy(userList, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments);
    if (result) {
      emit(Reflect.get(target, property, receiver));
    }
    return result;
  }
});

proxy.push(1)
// push 方法会将一个元素添加到数组末尾，并返回数组的新长度。
// push(1) 会触发 set 捕捉器两次:
// 第一次：将 1 赋值给 userList[0]。
// 第二次：更新 userList.length 属性（从 0 增加到 1）。
// 对每个 set 操作，emit 函数都会被调用一次，因此第一次 push 打印了两次。
proxy.push(2)

 */








