function escondeArtigos(){
	var articles = document.getElementsByTagName("article");
	for (var i=0; i<articles.length; i++){
		var article = articles[i];
		article.style.display = "none";
	}	
}
escondeArtigos();
var link1 = document.getElementById("link-premio1");
link1.onclick = function(){
	escondeArtigos();
	document.getElementById("premio1").style.display = "block";
}

var link2 = document.getElementById("link-premio2");
link2.onclick = function(){
	escondeArtigos();
	document.getElementById("premio2").style.display = "block";
}

var link3 = document.getElementById("link-premio3");
link3.onclick = function(){
	escondeArtigos();
	document.getElementById("premio3").style.display = "block";
}

var link4 = document.getElementById("link-premio4");
link4.onclick = function(){
	escondeArtigos();
	document.getElementById("premio4").style.display = "block";
}
