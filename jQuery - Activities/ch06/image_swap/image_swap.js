$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
			var current_image = this;

			$("#caption").fadeOut(1000);
			$("#image").fadeOut(1000, function(){
				//Assigning new image
				var imageURL = $(current_image).attr("href");
		   		$("#image").attr("src", imageURL).fadeIn(1000);
		   		 
		   		//Assigning new caption 
		   		var caption = $(current_image).attr("title");
		    	$("#caption").text(caption).fadeIn(1000);
			});
        
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready