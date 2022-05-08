let arr = [1, 2, 3, 4, 5, 6]
let obj = {
	key1: 1,
	key2: 2
}

// console.log(arr[0], obj.key1)

let arr2 = arr

// console.log(arr == arr2)

arr2[0] = 0

// console.log(arr)

let nestedArr = [[1, 2], [3, 4], 5]

console.log(nestedArr[1][1])
