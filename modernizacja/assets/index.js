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
				if (swiper.activeIndex === 2) {
					animateNumber('price_1', 0, 5675, 4000)
				}
				if (swiper.activeIndex === 3) {
					animateNumber('price_2', 0, 1499, 6000)
					animateNumber('price_3', 0, 5499, 6000)
					animateNumber('price_4', 0, 899, 6000)
					animateNumber('price_5', 0, 899, 6000)
					animateNumber('price_6', 0, 899, 6000)
					animateNumber('price_7', 0, 249, 6000)
					animateNumber('price_8', 0, 9944, 6000)
				}
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

async function animateNumber(elementId, start, end, duration) {
	const element = document.getElementById(elementId)
	const range = end - start
	const startTime = performance.now()

	function update(currentTime) {
		const elapsedTime = currentTime - startTime
		const progress = Math.min(elapsedTime / duration, 1)
		const currentNumber = Math.floor(start + range * progress)

		element.textContent = currentNumber.toLocaleString()

		if (progress < 1) {
			requestAnimationFrame(update)
		}
	}

	requestAnimationFrame(update)
}