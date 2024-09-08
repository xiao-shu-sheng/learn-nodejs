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