/**
 * push
 * 往数组增加元素
 */

function myPush() {
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i]
	}
	return this.length
}

Array.prototype.myPush = myPush


export default {
	log: function () {
		console.log(myPush)
		const arr = [1, 2, 3]
		console.log(JSON.stringify(arr) + `.myPush(4, 5)`)
		arr.myPush(4, 5)
		console.log('arr', arr)
	}
}