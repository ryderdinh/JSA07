/* Áp dụng kiến thức về Local Storage để thực hiện 3 chức năng sau đây: 
Tìm kiếm dữ liệu có sẵn tại Local và Update lại thông tin. VD: Trong bộ dữ liệu người dùng có >= 2 phần tử, 
tìm người dùng tên Phước và đổi thành Hà.
Xóa một dữ liệu có sẵn tại Local. VD: Trong bộ dữ liệu người dùng có >= 2 phần tử, tìm người dùng tên Phước 
và xóa người dùng này.
Xóa hẳn một bộ dữ liệu trong Local. VD: Xóa hoàn toàn bộ dữ liệu người dùng có >= 2 phần tử.
 */

const userName = document.querySelector('#username')
const lastUserName = document.querySelector('#last-username')

function addUser(e) {
	e.preventDefault()
	console.log('add')
}

let users = []

if (!localStorage.getItem('users')) {
	localStorage.setItem('users', JSON.stringify([]))
	users = []
} else {
	users = JSON.parse(localStorage.getItem('users'))
}

const addBtn = document.querySelector('#add')
const updateBtn = document.querySelector('#update')
const removeBtn = document.querySelector('#remove')
const removeAllBtn = document.querySelector('#remove-all')

addBtn.addEventListener('click', function (e) {
	e.preventDefault()

	let name = userName.value
	users.push(name)
	localStorage.setItem('users', JSON.stringify(users))
	console.log(users)

	userName.value = ''
})

updateBtn.addEventListener('click', function (e) {
	e.preventDefault()

	let beforeName = userName.value
	let afterName = lastUserName.value

	for (let i = 0; i < users.length; i++) {
		if (users[i] == beforeName) {
			users[i] = afterName
		}
	}

	localStorage.setItem('users', JSON.stringify(users))
	console.log(users)

	userName.value = ''
})

removeBtn.addEventListener('click', function (e) {
	e.preventDefault()

	let name = userName.value
	let i = 0
	while (i < users.length) {
		if (users[i] == name) {
			users.splice(i, 1)
		} else i++
	}

	localStorage.setItem('users', JSON.stringify(users))
	console.log(users)

	userName.value = ''
})

removeAllBtn.addEventListener('click', function (e) {
	e.preventDefault()

	users = []

	localStorage.setItem('users', JSON.stringify([]))
	console.log(users)

	userName.value = ''
})

/* Áp dụng kiến thức về setTimeout + setInterval 
để làm một bản hiển thị lời bài hát. Cứ sau 1s lại 
hiển thị một dòng chữ. Lời bài hát tự tìm kiếm, tối thiểu 5 câu. */

const lyric = [
	'The end of the night',
	'We should say goodbye',
	'But we carry on',
	'While everyone’s gone',
	'Never felt like this before-ore',
	'Are we friends or are we more?',
	'As I’m walking towards the door',
	'I’m not sure'
]

let index = 0

let lyricInterval = setInterval(function () {
	console.log(lyric[index])
	index++

	if (index == lyric.length) {
		clearInterval(lyricInterval)
	}
}, 1000)
