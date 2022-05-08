// localstorage

let count = 0

if (localStorage.getItem('count') != null) {
	count = localStorage.getItem('count')
}

const increase = document.querySelector('#increase')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')
const removeLocalstorage = document.querySelector('#removeLocalstorage')

reset.addEventListener('click', function () {
	count = 0
	result.innerText = 0
	localStorage.setItem('count', count)
})

result.innerText = count

increase.addEventListener('click', function () {
	++count
	result.innerText = count
	localStorage.setItem('count', count)
})

removeLocalstorage.addEventListener('click', function () {
	localStorage.removeItem('count')
})
