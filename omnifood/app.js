const header = document.querySelector('.header')

// header.classList.toggle('scroll', window.scrollY > 0)

window.onscroll = function () {
	header.classList.toggle('scroll', window.scrollY > 0)
}
