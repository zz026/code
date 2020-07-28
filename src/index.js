import myNew from './new'
import myBind from './bind'
import myApply from './apply'
import myCall from './call'
import myForEach from './array/forEach'
import myMap from './array/map'
import myReduce from './array/reduce'
import myFilter from './array/filter'
import myPush from './array/push'
import myPop from './array/pop'
import myShift from './array/shift'
import myUnshift from './array/unshift'
import myConcat from './array/concat'

const ul = document.getElementById('ul')

ul.addEventListener('click', function(e) {
	console.clear();
	const li = e.target
	if (li.nodeName.toLowerCase() !== 'li') { return }
	const obj = {
		myNew,
		myBind,
		myApply,
		myCall,
		myForEach,
		myMap,
		myReduce,
		myFilter,
		myPush,
		myPop,
		myShift,
		myUnshift,
		myConcat,
	}
	obj[li.innerText].log && obj[li.innerText].log()
})