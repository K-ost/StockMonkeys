
// Swiper
const financeSlider = new Swiper('.finance_slider', {
	slidesPerView: 'auto',
	spaceBetween: 16
})
const tabsSwiper = new Swiper('.tabs_swiper .swiper', {
	slidesPerView: 'auto',
	spaceBetween: 8
})


// bars
const navBars = document.querySelector('.js-bars')
const navOverlay = document.querySelector('.sidemenu_overlay')
if (navBars) {
	navBars.addEventListener('click', e => {
		e.preventDefault()
		document.body.classList.add('sidemenu_opened')
	})
	navOverlay.addEventListener('click', () => {
		document.body.classList.remove('sidemenu_opened')
	})
}


// js-btn_fix
const btnFix = document.querySelector('.js-btn_fix')
if (btnFix) {
	btnFix.addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('.fix_buttons').classList.toggle('opened')
	})
}



