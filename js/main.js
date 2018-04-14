// Main Javascript file for reverie.studio

$(document).ready(function() {
	
	$('.menu-toggle').click(function(e) {
		e.preventDefault()
		$('nav ul.main').toggleClass('closed')
	})
	
})