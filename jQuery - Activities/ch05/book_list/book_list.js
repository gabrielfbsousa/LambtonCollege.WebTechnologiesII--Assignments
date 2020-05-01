$(document).ready(function(){
  $("h2").each(function(){
    $(this).click(function(){

      if($(this).attr("class") != "minus"){
      $(this).attr("class", "minus");

      var div = $(this).next();
      div.attr("class", "open");
    } else {
      $(this).removeAttr("class");

      var div = $(this).next();
      div.removeAttr("class");
    }
    });
  });

  $("a").each(function(){
    $(this).click(function(evt){
      var href = $(this).attr("href");

      var preloadedImage = new Image();
      preloadedImage.src = href;

      $("aside img").attr("src", href);

      evt.preventDefault();
    });
  });
});
