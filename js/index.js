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

	
	let $third = document.querySelector('.full-viewport:nth-child(3)')
	let fromD = $third.offsetTop
	let fromW = $third.getBoundingClientRect().bottom

	if (thirdTop < winH / 2) {
		console.log(`Above viewport half`)
	} else {
		console.log(`Below viewport half`)
	}



	document.querySelector('.panel').innerHTML = `
		<li>The window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide</li>
		<li>The document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide</li>
		<li>The window has scrolled <strong>${winY}</strong> px vertically, <strong>${winX}</strong> px horizontally
			<ol>
				<li>That's <strong>${pctY}</strong> % of <strong>${maxY}</strong> vertically</li>
				<li>That's <strong>${pctX}</strong> % of <strong>${maxX}</strong> horizontally</li>
			</ol>
		</li>
		<li>The third section is <strong>${fromD}</strong> px from the top of the document</li>
		<li>The third section is <strong>${fromW}</strong> px from the top of the viewport/window</li>
		`
}

// 1                       2     3
window.addEventListener('load', theStateOfThings)
window.addEventListener('scroll', theStateOfThings)
window.addEventListener('resize', theStateOfThings)

