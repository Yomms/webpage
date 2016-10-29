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