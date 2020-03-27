// let theStateOfThings = function () {
let theStateOfThings = () => {

	let winH = document.documentElement.clientHeight
	let winW = document.documentElement.clientWidth
	let docH = document.documentElement.scrollHeight
	let docW = document.documentElement.scrollWidth
	let winY = window.scrollY
	let winX = window.scrollX
	let maxY = docH - winH
	let maxX = docW - winW
	let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
	let pctX = Math.round(winX / Math.max(maxX, 1) * 100)


	let infoForElement = ''	

	let checkOneSection = ($sec) => {
		let fromD = $sec.offsetTop
		let fromW = $sec.getBoundingClientRect().top

		if (fromW < winH / 2) {
			infoForElement += `<li>The third section is <strong>above</strong> the window's midpoint</li>`
		} else {
			infoForElement += `<li>The third section is <strong>below</strong> the window's midpoint</li>`
		}
	}

	document.querySelectorAll('.full-viewport').forEach(checkOneSection)


	document.querySelector('.panel').innerHTML = `
		<li>The window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide</li>
		<li>The document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide</li>
		<li>The window has scrolled <strong>${winY}</strong> px vertically, <strong>${winX}</strong> px horizontally
			<ol>
				<li>That's <strong>${pctY}</strong> % of <strong>${maxY}</strong> vertically</li>
				<li>That's <strong>${pctX}</strong> % of <strong>${maxX}</strong> horizontally</li>
			</ol>
		</li>
		${infoForElement}
		`


}

// 1                       2     3
window.addEventListener('load', theStateOfThings)
window.addEventListener('scroll', theStateOfThings)
window.addEventListener('resize', theStateOfThings)

