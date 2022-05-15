//============= let, const

// let a = 3
// const b = 8

// {
// 	let c = 9
// }

// // console.log(c)

// for (var i = 0; i < 10; i++) {
// 	console.log(i)
// }

// console.log(i)

//============= Arrow functions
// function sum(a, b) {
// 	return a + b
// }

// const sum2 = (a, b) => a + b

// const lg = a => console.log(a)

// lg(2)

// console.log(sum(1, 2), sum2(1, 2))

// let abc

// abc.addEventListener('click', () => {
// 	console.log(abc)
// })

//============= For loop
let arr1 = [1, 2, 3, 4, 5]

// for (let item of arr1) {
// 	console.log(item)
// }

// for-in

// arr1.forEach((item, index, arr) => {
// 	console.log(item, 'index: ' + index)
// 	console.log(arr)
// })

//============= map, filter, reduce, find

// let newArr = arr1.map(item => item * 2)
// let newArr = arr1.filter(item => item % 2 === 0)
// let newArr = arr1.reduce((acc, item) => {
// 	console.log(acc, item)
// 	return acc - item
// })
// let item = arr1.find(item => item % 2 === 0)
// console.log(item)

// console.log(newArr)
// console.log(arr1)

//============= includes, indexOf
let str = 'hello world'

console.log(str.includes('hello ', 1))
console.log(str.indexOf('hello ', 5))
