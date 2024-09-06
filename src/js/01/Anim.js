/** Anim */

/**
  const Anim = function() {}
  Anim.prototype.start = function(){
    console.log('start learning')
  }
  Anim.prototype.stop = function(){
    console.log('mother fuck, here is no money')
  }
  const myAnim = new Anim()
  myAnim.start()
  myAnim.stop()
*/


/**
  Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn
    return this
  }
  const Anim = function() {}

  Anim.method('start', () => {
    console.log('mother fuck')
  }).method('stop', () => {
    console.log('fuck you')
  })

  const myAnim = new Anim()
  myAnim.start()
  myAnim.stop()
*/

// an anonymous function


