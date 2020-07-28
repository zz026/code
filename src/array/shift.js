/**
 * Shift
 * 把数组的第一个元素从其中删除，并返回第一个元素的值。
 */

function myShift() {
	if (!this.length) return
	const firstVal = this[0]
	for (let i = 0; i < this.length; i++) {
		this[i] = this[i + 1]
	}
	this.length -= 1
	return firstVal
}

Array.prototype.myShift = myShift


export default {
	log: function() {
		console.log(myShift)
		const arr = [122, 2, 3, 4, 5]
		console.log(JSON.stringify(arr) + '.myShift(100, 200)')
		console.log('arr', arr)
		console.log('return:', arr.myShift())
	}
}