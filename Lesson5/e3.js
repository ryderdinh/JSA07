function numberOneTriangle() {
	const e3 = document.querySelector('#e3')
	let contentAll = ''
	for (let i = 1; i <= 5; i++) {
		let content = ''

		for (let j = 0; j < i; j++) {
			content += '1'
		}

		contentAll += `${content} <br/>`

		e3.innerHTML = contentAll
	}
}

numberOneTriangle()
