/**
 * map
 * 生成一个新数组
 */

 function myMap(fn) {
		 let arr = []
		 for (let i = 0; i < this.length; i++) {
			arr.push(fn(this[i], i, this))
		 }
		 return arr
 }

 Array.prototype.myMap = myMap

 export default {
	 log: function() {
		 	console.log(myMap)
			const arr = [{a:2}, {a:3}, {a:0}]
			console.log(JSON.stringify(arr) + `.myMap((val, index, array) => {
				console.log(val, index, array)
				return val
			})
			`)
			const newArr = arr.myMap((val, index, array) => {
			console.log(val, index, array)
			return val
		})
			console.log('return', newArr)
			console.log('arr === newArr', arr === newArr)
	 }
 }

