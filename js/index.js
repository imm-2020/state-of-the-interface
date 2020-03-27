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
		let top = $sec.getBoundingClientRect().top
		let bottom = $sec.getBoundingClientRect().bottom
		
		let theId = $sec.getAttribute('id')

		if (top < winH && bottom > 0) {
			infoForElement += `<li class="past" style="opacity:${bottom / winH};">${$sec.querySelector('h2').textContent}</li>`
		} else {
			infoForElement += `<li><a href="#${theId}">${$sec.querySelector('h2').textContent}</a></li>`
		}
	}

	// Iterate through each matching eleemnt, call the checkOneSection function for each one
	document.querySelectorAll('.full-viewport').forEach(checkOneSection)


	document.querySelector('.panel').innerHTML = `
		<h2>Page Stats</h2>
		<li>The window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide</li>
		<li>The document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide</li>
		<li>The window has scrolled <strong>${winY}</strong> px vertically, <strong>${winX}</strong> px horizontally
			<ol>
				<li>That's <strong>${pctY}</strong> % of <strong>${maxY}</strong> vertically</li>
				<li>That's <strong>${pctX}</strong> % of <strong>${maxX}</strong> horizontally</li>
			</ol>
		</li>
		<h2>The Sections:</h2>
		<li>
			<ol>${infoForElement}</ol>
		</li> 
		`
}

// 1                       2     3
window.addEventListener('load', theStateOfThings)
window.addEventListener('scroll', theStateOfThings)
window.addEventListener('resize', theStateOfThings)

