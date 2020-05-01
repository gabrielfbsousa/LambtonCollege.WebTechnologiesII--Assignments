$(document).ready(function(){
	$("#jdom a").click(function(){
		$(this).prev().toggleClass("hide");
		if ($(this).prev().attr("class") != "hide"){
			$(this).prev().removeClass("hide");
			$(this).first().text("Show Less");
		} else {
			$(this).prev().addClass("hide");
			$(this).first().text("Show More");
		}
	});
});
