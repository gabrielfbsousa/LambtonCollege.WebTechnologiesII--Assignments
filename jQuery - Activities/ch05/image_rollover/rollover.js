$(document).ready(function(){
	$("#image_rollovers img").each(function(){
		$(this).hover(function(){
			var id = $(this).attr("id");
			var src = $(this).attr("src");

			$(this).attr("alt", src);
			$(this).attr("src", id);

			var preloadImage = new Image();
			preloadImage.src = id;

		}, function(){
			var alt = $(this).attr("alt");
			var src = $(this).attr("src");

			$(this).attr("id", src);
			$(this).attr("src", alt);

			var preloadImage = new Image();
			preloadImage.src = alt;
		});
	});
});
