const e4 = document.querySelector('#e4')

setInterval(function () {
	e4.innerText = new Date().toLocaleTimeString()
}, 1000)
