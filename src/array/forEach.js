/**
 * forEach
 * 循环数组
 */

function myForEach(fn) {
	for (let i = 0; i < this.length; i++) {
		fn(this[i], i, this)
	}
}

Array.prototype.myForEach = myForEach

export default {
log: function() {
	console.log(myForEach)
	 const arr = [{a:2}, {a:3}, {a:0}]
	 console.log(JSON.stringify(arr) + `.myForEach((val, index, array) => {
		console.log(val, index, array)
	})
	`)
	 arr.myForEach((val, index, array) => {
		console.log(val, index, array)
	})
}
}

