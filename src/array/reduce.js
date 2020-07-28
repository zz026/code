/**
 * reduce
 */

 function myReduce(fn, ininVal = 0) {
	 let result = ininVal
	 for (let i = result ? 1 : 0; i < this.length; i++) {
		result = fn(result, this[i], i, this)
	 }
	 return result
 }

 Array.prototype.myReduce = myReduce

 
 export default {
	 log: function() {
			console.log(myReduce)
			const arr = [1, 2, 3, 4, 5]
			console.log('	const sum = ' + JSON.stringify(arr) + `.myReduce((a, b) => {
				return a + b
			})
			`)
			const sum = arr.myReduce((a, b) => {
				return a + b
			})
			console.log('sum', sum)
	 }
 }