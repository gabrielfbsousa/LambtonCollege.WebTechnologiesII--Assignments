$(document).ready(function(){
	$("a").click(function(){
		$(this).prev().toggleClass("hide");
		
		if($(this).prev().attr("class") != "hide"){
			$(this).first().text("Show less");
		} else {
			$(this).first().text("Show more");
		}
		
	});
});
