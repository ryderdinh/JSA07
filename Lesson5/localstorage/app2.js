let arr = [1, 2, 3, 4, 5, 'hello', [1, 2]]
let obj = {
	key1: 1,
	key2: 2,
	key3: [1, 2, 3, 4, 5, 'hello']
}

// console.log(arr)

// let newArr = JSON.stringify(arr)
// newArr = JSON.parse(newArr)

// console.log(newArr)

// console.log(obj)

// let newObj = JSON.stringify(obj)
// newObj = JSON.parse(newObj)

// console.log(newObj)

arr = JSON.stringify(arr)
obj = JSON.stringify(obj)

localStorage.setItem('arr', arr)
localStorage.setItem('obj', obj)

arr = JSON.parse(localStorage.getItem('arr'))
obj = JSON.parse(localStorage.getItem('obj'))

console.log(arr)
console.log(obj)
