"use strict";
var $ = function (id){
	return document.getElementById(id);
};

window.onload = function(){
	$("calculate").onclick = execution;
};


var execution = function(){
	var miles =  $("miles").value;
	var gallons = $("gallons").value;
	var result = miles/gallons;
	$("result").value = result;
};

