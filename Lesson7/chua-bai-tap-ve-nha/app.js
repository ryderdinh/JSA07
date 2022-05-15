let carts = []
const cartTableBody = document.getElementById('cart-table-body')
const addForm = document.querySelector('#add-form')
const updateForm = document.querySelector('#update-form')

let searchId = null

function initLocalStorage() {
	if (!localStorage.getItem('carts')) {
		localStorage.setItem('carts', JSON.stringify([]))
		carts = []
		setDataTable(carts)
	} else {
		carts = JSON.parse(localStorage.getItem('carts'))
		setDataTable(carts)
	}
}

initLocalStorage()

function setDataTable(data) {
	let html = ''

	for (let i = 0; i < data.length; i++) {
		let htmlItem = `
                <tr>
									<th scope="row">${i + 1}</th>
									<td>${data[i].name}</td>
									<td>${data[i].quantity}</td>
								</tr>
      `

		html += htmlItem
	}

	cartTableBody.innerHTML = html
}

function addItem() {
	let nameItem = addForm.name.value
	let quantityItem = addForm.quantity.value

	console.log(nameItem, quantityItem)

	carts.push({
		name: nameItem,
		quantity: Number(quantityItem)
	})
	setDataTable(carts)

	localStorage.setItem('carts', JSON.stringify(carts))
}

function search() {
	let searchValue = updateForm['search-value-update'].value
	let result = {}

	for (let i = 0; i < carts.length; i++) {
		if (carts[i].name == searchValue) {
			result = carts[i]
			searchId = i + 1
			break
		}
	}

	if (Object.keys(result).length > 0) {
		updateForm['update-name'].value = result.name
		updateForm['update-quantity'].value = result.quantity
	}
}

function updateItem() {
	let nameItem = updateForm['update-name'].value
	let quantityItem = updateForm['update-quantity'].value

	for (let i = 0; i < carts.length; i++) {
		if (searchId && searchId == i + 1) {
			carts[i].name = nameItem
			carts[i].quantity = Number(quantityItem)

			setDataTable(carts)

			localStorage.setItem('carts', JSON.stringify(carts))

			break
		}
	}
}
