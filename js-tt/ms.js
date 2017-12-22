// JavaScript Document
$(document).ready(function() {	
		var slider = new MasterSlider();
		slider.control('arrows' , {autohide:true}); // here we've added arrow control to the slider.	

		slider.setup('masterslider' , {
			width:3000,	
			autoplay: 5000,
			space:0,
			view:'mask',
			layout:'autofill',
			speed:20,
			instantStartLayers: true,
			loop: true
		});
});