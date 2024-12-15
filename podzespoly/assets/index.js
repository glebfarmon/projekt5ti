window.onload = () => {
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			init: () => {
				startTypeWritting(0)
			},
			slideChange: () => {
				startTypeWritting(swiper.activeIndex)
				document
					.querySelectorAll('.visible')
					.forEach(el => el.classList.remove('visible'))
			},
		},
	})
}

function startTypeWritting(id) {
	const title = document.getElementById(`title_${id}`)
	const text = title.getAttribute('attr-text')

	const typewriter = new Typewriter(title, {
		delay: 75,
	})

	typewriter
		.pauseFor(300)
		.typeString(text)
		.start()
		.callFunction(() => {
			document.getElementById(`body_${id}`).classList.add('visible')
		})
}
