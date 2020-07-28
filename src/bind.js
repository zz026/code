/**
 * 手撕bind
 * 返回一个函数，传入多个参数
 * 1.通过apply实现，
 *  	第一个参数  判断是否为this是否存在context原型链上，是则取this，反之取context
 *  	第二个参数  将两个arguments进行拼接，第一个取下标1以后的
 * 2.原型链绑定，通过一个构造函数当中间件实现（防止同一个指针）
 * 3.判断类型，防止报错
 * 
 * 	需考虑以下两种情况
 * 		A = Animal.bind(Cat, name) // this指向cat
 * 		b = new A(age) // this指向实例
 * 
 */

// es5
function myBindES5(context) {
  if (typeof context !== 'function') {
    throw new Error(context + 'is not a function')
  }
  var self = this
  var arg1 = Array.from(arguments).slice(1)
  var Fn = function () {
    var arg2 = Array.from(arguments)
    return self.apply(this instanceof context ? this : context, arg1.concat(arg2))
  }
  var FMiddle = function () {}
  FMiddle.prototype = this.prototype
  Fn.prototype = new FMiddle()
  return Fn
}

// es6
function myBindES6(context, ...arg1) {
  if (typeof context !== 'function') {
    throw new Error(`${context} is not a function`)
  }
  const self = this
  const Fn = function (...arg2) {
    return self.apply(this instanceof context ? this : context, [...arg1, ...arg2])
  }
  const FMiddle = function () {}
  FMiddle.prototype = this.prototype
  Fn.prototype = new FMiddle()
  return Fn
}


export default {
  log: function () {
    const func = myBindES5.toString().replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;&nbsp;')
    const func2 = myBindES6.toString().replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;&nbsp;')
    document.getElementById('code').insertAdjacentHTML('beforeBegin', `
			<h3>myBindES5:</h3>
			<div>
				${func}
			</div>
			<h3>myBindES6:</h3>
			<div>
				${func2}
			</div>
		`)
  }
}