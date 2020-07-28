/**
 * pop
 * 删除并返回数组的最后一个元素
 */

function myPop() {
	if (!this.length) return
	let val = this[this.length - 1]
	this.length -= 1
	return val
}

Array.prototype.myPop = myPop


export default {
	log: function() {
		console.log(myPop)
		const arr = [1, 2, 3, 4, 5]
		console.log(JSON.stringify(arr) + `.myPop()`)
		console.log('return:', arr.myPop())
		console.log('arr', arr)
	}
}