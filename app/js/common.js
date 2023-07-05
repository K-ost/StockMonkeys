
// Generating of date and time
const dateSpan = document.querySelector('#js_date')
const timeSpan = document.querySelector('#js_time')

const dateGot = new Date()
const dateGotDay = ( dateGot.getDate() < 10 ) ? '0' + dateGot.getDate() : dateGot.getDate()
const dateGotMonth = ( dateGot.getMonth() < 10 ) ? '0' + dateGot.getMonth() : dateGot.getMonth()
const dateGotHours = ( dateGot.getHours() < 10 ) ? '0' + dateGot.getHours() : dateGot.getHours()
const dateGotMins = ( dateGot.getMinutes() < 10 ) ? '0' + dateGot.getMinutes() : dateGot.getMinutes()
const dateString = `${dateGotDay}.${dateGotMonth}.${dateGot.getFullYear()}`
const timeString = dateGotHours + ':' + dateGotMins

if (dateSpan) {
	dateSpan.innerText = dateString
}
if (timeSpan) {
	timeSpan.innerText = timeString
}


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


// Modals
Fancybox.bind("[data-fancybox]", {
  closeButton: false,
	dragToClose: false,
})


// Select
const selects = document.querySelectorAll('.js-select')
selects.forEach(select => {
	select.addEventListener('click', e => {
		e.preventDefault()
		const parent = e.target.closest('.selectbox')
		parent.classList.toggle('opened')
	})
})
const selectOptions = document.querySelectorAll('.selectbox-dropdown ul li')
selectOptions.forEach(option => {
	option.addEventListener('click', e => {
		e.preventDefault()
		const text = e.target.innerText
		const parent = e.target.closest('.selectbox')
		const parentVal = e.target.closest('.selectbox').children[0].children[1]
		parentVal.innerText = text
		parent.classList.remove('opened')
	})
})


// js-like / js-dislike
document.querySelector('.js-like').addEventListener('click', e => {
	e.preventDefault()
	document.querySelector('.discovery_card-react').classList.add('shown')
	document.querySelector('.discovery_card-react').classList.remove('angry')
})
document.querySelector('.js-dislike').addEventListener('click', e => {
	e.preventDefault()
	document.querySelector('.discovery_card-react').classList.add('shown')
	document.querySelector('.discovery_card-react').classList.remove('happy')
	document.querySelector('.discovery_card-react').classList.add('angry')
})



