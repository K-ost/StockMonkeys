
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


// range1
function setRangeSlider(id, min, max) {
	return new rSlider({
		target: `#range-${id}`,
		values: {min: min, max: max},
		step: 1,
		range: false,
		tooltip: false,
		scale: false,
		labels: false,
		set: [min, max],
		onChange: (values) => {
			document.querySelector(`#js_range_val-${id}`).textContent = values
		}
	})
}
const range1 = setRangeSlider(1, 1, 100)
const range2 = setRangeSlider(2, -100, 0)
const range3 = setRangeSlider(3, -100, 100)


/* js-filter_btn */
const filterBtns = document.querySelectorAll('.js-filter_btn')
filterBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		const parent = e.target.closest('.js-filter_parent')
		parent.classList.toggle('opened')
	})
})

