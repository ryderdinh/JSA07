/*
  string, number, booolean, undefined, symbol,...
  array, object, function
*/

// let, var, const
let a = 1
a = 2

let form = document.getElementById('form')
let nameInput = document.getElementById('name')
let passwordInput = document.getElementById('password')

form.addEventListener('submit', function (e) {
	e.preventDefault()

	console.log(nameInput.value, passwordInput.value)

	if (nameInput.value == 'admin' && passwordInput.value == '123456') {
		alert('Success')
	} else {
		alert('Fail')
	}
})

// name: admin
// password: 123456
