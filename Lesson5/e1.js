function init() {
	let numberInput

	while (true) {
		numberInput = inputData()

		if (numberInput > 3 && numberInput < 21) {
			findEven(numberInput)
			break
		}
	}
}

function findEven(number) {
	for (let i = 0; i <= number; i++) {
		if (i % 2 == 0) {
			console.log(i)
		}
	}
}

function inputData() {
	let number = Number(prompt('Enter a number 4-20: '))

	return number
}

init()
