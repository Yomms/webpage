function myFunction() {
	var selectBox = document.getElementById("cars");
	selectBox.remove(selectBox.selectedIndex);
}
 
function showImage() {
	var img = document.createElement("img");
	img.src = "Dome.jpg";
	img.id = "imgg";
	img.width = 500;
	document.getElementById("imageHolder").appendChild(img);
}

function resizeImage() {

 document.getElementById("imgg").width="250";

}

FACTOR = 0.7
function smaller() {
	var height = document.getElementById("birds").height * FACTOR
	var width = document.getElementById("birds").width * FACTOR
	document.getElementById("birds").width = width
	document.getElementById("birds").height=height
}
