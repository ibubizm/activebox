$(function(){

	// header=================
	let header = $('#header')
	let intro = $('#intro')
	let introH = intro.innerHeight()
	let scrollPos = $(window).scrollTop()
	let nav = $('#nav')
	let navToggle = $('#navToggle')

	checkScroll(scrollPos, introH)
	

	function checkScroll(scrollPos, introH){
		if(scrollPos > introH){
			header.addClass('fixed')
		}
		else{
			header.removeClass('fixed')
		}
	}

	$(window).on('scroll resize', function(){
		scrollPos = $(this).scrollTop()
		introH = intro.innerHeight()
		
		checkScroll(scrollPos, introH)
	})

	
	$("[data-scroll]").on('click', function(event){
		event.preventDefault()

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass('show')

		console.log(elementOffset)

		$('html, body').animate({
			scrollTop: elementOffset -50
		}, 1000)
	})

	// nav===================
	
	navToggle.on('click', function(event){
		event.preventDefault()
		nav.toggleClass('show')
	})

	// reviews==================
	let slider = $('#reviewsSlider')

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,

});
});