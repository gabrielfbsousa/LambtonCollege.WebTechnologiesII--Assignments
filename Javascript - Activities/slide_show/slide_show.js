"use strict";
var $ = function (id) { 
	return document.getElementById(id); 
};

window.onload = function () {
    var slidesNode = $("slides");  //o nó pai de todas as tags de imagens, que usaremos pra pegar as imagens carregadas   
    var captionNode = $("caption"); //o nó que define a descrição do slide que estamos mostrando
    var imageNode = $("slide"); //o nó que define a imagem que estaremos mostrando
        
    var slides = slidesNode.getElementsByTagName("img"); //cria um array, chamado slides, com todas as tags
    
    var image, imageCounter = 0; //inicia um contador pra que se troque as imagens
    
    $("next").onclick = function(){
    	imageCounter = (imageCounter + 1) % slides.length; //passa pra próxima posição(imagem), dentro do array de slides
		    image = slides[imageCounter]; //pegamos uma nova imagem, dentro do array, com a posição que queremos
		    imageNode.src = image.src; //a imagem em evidência será essa próxima imagem que pegamos (passamos o caminho pra ela)
		    captionNode.firstChild.nodeValue = image.alt; //a descrição (que é o primeiro nó filho da tag de caption) será agora a descrição escrita no alt da próxima imagem.
    };
    
    $("previous").onclick = function() {
    	imageCounter = (imageCounter - 1) % slides.length; //passa pra próxima posição(imagem), dentro do array de slides
		    image = slides[imageCounter]; //pegamos uma nova imagem, dentro do array, com a posição que queremos
		    imageNode.src = image.src; //a imagem em evidência será essa próxima imagem que pegamos (passamos o caminho pra ela)
		    captionNode.firstChild.nodeValue = image.alt; //a descrição (que é o primeiro nó filho da tag de caption) será agora a descrição escrita no alt da próxima imagem.
    };
   
};
