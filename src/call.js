/**
 * 手撕call
 * 1.增加自定义属性
 * 2.执行属性
 * 3.删除属性
 */
// a.call(obj, 1, 2,3)

function myCall(context) {
  var context = Object(context) || window;
  context.fn = this;
  var args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

Function.prototype.myCall = myCall

export default {
  log: function () {
    function Person() {
      this.name = 'zhangsan'
      this.age = 18
      console.log(this)
    }
    const obj = {
      sex: '男',
    }
    // Person.apply(obj)
    Person.myCall(obj, {
      a: 2
    }, {
      c: 3
    })


    const func = myCall.toString().replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;&nbsp;')
    document.getElementById('code').insertAdjacentHTML('beforeBegin', `<h3>myCall:</h3><div>${func}</div>`)

  }
}