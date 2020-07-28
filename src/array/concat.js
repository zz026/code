/**
 * concat
 * 数组拼接
 */

function myConcat(arr = []) {
	var leg = this.length
	for (let i = 0; i < arr.length; i++) {
		this[leg + i] = arr[i]
	}
	return this
}

Array.prototype.myConcat = myConcat

export default {
	log: function () {
		console.log(myConcat)
		const arr = [1, 2, 3]
		console.log(JSON.stringify(arr) + `.myConcat([5, 6])`)
		console.log(arr.myConcat([5, 6]))
	}
}