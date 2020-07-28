/**
 * unshift
 * 向数组的开头添加一个或更多元素，并返回新的长度。
 */

function myUnshift() {
	// if (!this.length) return
	const args = [...arguments]
	for (let i = this.length - 1; i >= 0; i--) {
		this[i + args.length] = this[i]
	}
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i]
	}
	return this.length
}

Array.prototype.myUnshift = myUnshift


export default {
	log: function() {
		console.log('myUnshift:向数组的开头添加一个或更多元素，并返回新的长度。\n', myUnshift)
		const arr = [1, 2, 3, 4, 5]
		console.log(JSON.stringify(arr) + '.myUnshift(100, 200)')
		console.log('return:', arr.myUnshift(100, 200))
		console.log('arr', arr)
	}
}