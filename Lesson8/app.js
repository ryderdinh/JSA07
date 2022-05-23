//arrow func ()=>{}

// call api

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data)
// 	})

const pokeList = document.getElementById('poke-list')

const callApi = async () => {
	pokeHtml = ''
	for (let i = 0; i < 20; i++) {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
		res = await res.json()
		pokeHtml += `
            <div class="card" style="width: 18rem">
							<img src="${res.sprites.front_default}" class="card-img-top" alt="Pokemon" />
							<div class="card-body">
								<h5 class="card-title">${res.name}</h5>
								<p class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
    `
	}

	pokeList.innerHTML = pokeHtml
}

callApi()

