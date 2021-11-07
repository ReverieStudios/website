// Main Javascript file for reverie.studio

$(document).ready(function() {
	
	let gallery_images = []
	let current_index = null
	
	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img />').attr('src', this).appendTo('body').css('display', 'none');
	    });
	}
	
	function set_lightbox(thumb_width, thumb_height, full_source) {
		
		let aspect_ratio = thumb_width / thumb_height
		let content_width = $('#lightbox .content').width()
		
		$("#lightbox .content").css({
			'width': content_width, 
			'height': content_width / aspect_ratio,
			'background-image': "url('" + full_source + "')",
			'background-size': 'contain',
			'background-position': 'center center',
			'background-repeat': 'no-repeat'
		})
	}
	
	$('.menu-toggle').click(function(e) {
		e.preventDefault()
		$('nav ul.main').toggleClass('closed')
		$('a.menu-toggle').toggleClass('hidden')
	})
	
	$('.gallery img').click(function(e) {
		e.preventDefault()
		$('#lightbox').toggleClass('active')
	})
	
	$('.gallery img').click(function(e) {
		
		e.preventDefault()
		
		current_index = parseInt($(this).parents('.image').attr('data-image-num'))
		
		gallery_images = $(this).parents('.gallery').children('.image').map(function() {
			
			return {
				current_source: $(this).find('a').attr('href'),
				next_source: $(this).attr('data-image-next'),
				width: $(this).find('img').width(),
				height: $(this).find('img').height()
			}
		}).get()
				
		//preload(gallery_images.map(x => x.current_source))
		let this_image = gallery_images[current_index]
		set_lightbox(this_image.width, this_image.height, this_image.current_source)
	})
	
	$('#lightbox #controls .next').click(function(e) {
		e.preventDefault()
		current_index = (current_index + 1) % gallery_images.length
		let this_image = gallery_images[current_index]
		set_lightbox(this_image.width, this_image.height, this_image.current_source)
	})
	
	$('#lightbox #controls .prev').click(function(e) {
		e.preventDefault()
		current_index = (current_index - 1) % gallery_images.length
		current_index = current_index == -1 ? gallery_images.length - 1 : current_index
		let this_image = gallery_images[current_index]
		set_lightbox(this_image.width, this_image.height, this_image.current_source)
	})
	
	$('#lightbox .close').click(function(e) {
		e.preventDefault()
		$('#lightbox').toggleClass('active')
		$('#lightbox .content').css('background', 'none')
	})
	
	// keyboard controls
	window.addEventListener("keydown", function (event) {
		
		if (!$('#lightbox').hasClass('active')) {
			return
		}
		  
		  if (event.key == 'Esc' || event.key == 'Escape') {
			  event.preventDefault()
			  $('#lightbox').toggleClass('active')
			  $('#lightbox .content').css('background', 'none')
		  }
		  
		  if (event.key == 'ArrowRight' || event.key == 'Right') {
			  event.preventDefault()
			  current_index = (current_index + 1) % gallery_images.length
			  let this_image = gallery_images[current_index]
			  set_lightbox(this_image.width, this_image.height, this_image.current_source)
		  }
		  
		  if (event.key == 'ArrowLeft' || event.key == 'Left') {
			  event.preventDefault()
			  current_index = (current_index - 1) % gallery_images.length
			  current_index = current_index == -1 ? gallery_images.length - 1 : current_index
			  let this_image = gallery_images[current_index]
			  set_lightbox(this_image.width, this_image.height, this_image.current_source)
		  } 
	})
})