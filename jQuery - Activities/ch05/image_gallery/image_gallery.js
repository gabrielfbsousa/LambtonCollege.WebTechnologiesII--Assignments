$(document).ready(function(){
	$("#image_list a").each(function(){
		
		var url = $(this).attr("href");
		var caption = $(this).attr("title");
		
		var preloadImage = new Image();
		preloadImage.src = url;
		
		$(this).click(function(evt){
			
			//alert("Fui clicado");
			$("#caption").first().text(caption);
			$("#gallery img").attr("src", url);
			evt.preventDefault();
		});	
		
	});
});
