window.onload = () => {
	const title = document.getElementById('title')

	const typewriter = new Typewriter(title, {
		loop: true,
		delay: 75,
	})

	typewriter
		.pauseFor(300)
		.typeString('Opanuj PC od zera do bohatera')
		.pauseFor(300)
		.deleteAll(50)
		.pauseFor(300)
		.typeString('Świat technologii w prostych krokach')
		.pauseFor(300)
		.deleteAll(50)
		.pauseFor(300)
		.typeString('Od nowicjusza do eksperta razem!')
		.pauseFor(300)
		.start()
}
