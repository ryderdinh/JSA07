function mouseEnter() {
	console.log(true)
	e2.style.backgroundColor = 'red'
}

function mouseLeave() {
	e2.style.backgroundColor = 'blue'
}

const e2 = document.querySelector('#e2')

e2.addEventListener('mouseenter', mouseEnter)
e2.addEventListener('mouseleave', mouseLeave)
