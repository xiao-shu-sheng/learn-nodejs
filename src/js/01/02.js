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

/* class SuperArray extends Array {
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