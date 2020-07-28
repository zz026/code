/**
 * filter
 * 过滤数组
 */

 function myFilter(fn, thisValue) {
		const self = thisValue || this
		const arr = []
		for (let i = 0; i < self.length; i++) {
			 if (fn(this[i], i, this)) {
				 arr.push(this[i])
			 } 
		}
		return arr
 }

 Array.prototype.myFilter = myFilter

 export default {
	 log: function() {
		 console.log(myFilter)
		 const arr = [1, 2, 3, 4, 5]
		 const result = arr.myFilter(val => val > 3)
		 console.log('result', result)
	 }
 }