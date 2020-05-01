$(document).ready(function() {
    $("h2").each(function() {
        $(this).hover(function() {
            //alert("FUi hovado");
            var div = $(this).next();

            div.attr("class", "show");
            $(this).attr("class", "minus");

        }, function() {
            var div = $(this).next();

            div.attr("class", "");
            $(this).attr("class", "");
        });
    });
});
