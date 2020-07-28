/**
 * 手撕apply
 * 	立即调用，无返回值
 * 	1.把函数作为一个属性
 *  2.执行函数
 *  3.删除函数
 */

function myApply(context, arr) {
  if (typeof this !== 'function') {
    throw new Error('error!')
  }
  var context = Object(context) || window;
  context.fn = this
  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}

Function.prototype.myApply = myApply

export default {
  log: function () {
    console.log(myApply)
    function Person() {
      this.name = 'zhangsan'
      this.age = 18
      console.log(this.sex)
    }
    const obj = {
      sex: '男',
    }
    // Person.apply(obj)
    Person.myApply(obj)


    const func = myApply.toString().replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;&nbsp;')
    document.getElementById('code').insertAdjacentHTML('beforeBegin', `<h3>myApply:</h3><div>${func}</div>`)

  }
}