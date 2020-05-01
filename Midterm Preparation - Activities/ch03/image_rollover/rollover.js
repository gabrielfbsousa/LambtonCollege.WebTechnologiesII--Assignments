var $ = function (id) {
	return document.getElementById(id);
};

var mouseenterhandler = function(){
	var src = this.getAttribute("src");
	var id = this.getAttribute("id");
	
    var image = new Image();
	image.src = id;
	
	this.setAttribute("src", id);
	this.setAttribute("alt", src);

};

var mouseoverhandler = function(){
	var src = this.getAttribute("src");
	var alt = this.getAttribute("alt");
	var id = this.getAttribute("id");
	
	this.setAttribute("alt", src);
	this.setAttribute("id", alt);
	
	var image = new Image();
	image.src = id;
	
	this.setAttribute("src", alt);
	this.setAttribute("id", src);
};

window.onload = function () {
    var elements = document.getElementsByTagName("img");
    
    for(var i = 0; i<elements.length; i++){
    	var element = elements[i];
    	element.onmouseenter = mouseenterhandler;
    	element.onmouseout = mouseoverhandler;
    }
};