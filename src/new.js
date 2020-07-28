/**
 * 手撕new
 * 1.创建一个新对象
 * 2.this指向新的对象，执行构造函数的代码
 * 3.设置原型链，新对象__proto_指向构造函数的prototype对象
 * 4.判断：如果传入对象类型是一个对象，返回新对象；反之，直接返回
 */
function myNew() {
  const obj = new Object()
  const ConStructor = [].shift.call(arguments)
  const result = ConStructor.apply(obj, arguments)
  obj.__proto__ = ConStructor.prototype
  return result instanceof Object ? result : obj
}

function Animal(name) {
  this.name = name
}
Animal.prototype.getName = function () {
  return this.name
}

export default {
  log: function () {
    const func = myNew.toString().replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;&nbsp;')
    document.getElementById('code').insertAdjacentHTML('beforeBegin', `<h3>myNew:</h3><div>${func}</div>`)
    // const Cat = new Animal('cat')
    const Cat = myNew(Animal, 'cat')
    console.log(Cat.getName())
  }
}