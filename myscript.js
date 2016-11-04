function myFunction() {
	var selectBox = document.getElementById("cars");
	selectBox.remove(selectBox.selectedIndex);
}
 
function showImage() {
	var img = document.createElement("img");
	img.src = "Dome.jpg";
	img.id = "img_id";
	img.width = 500;
	document.getElementById("imageHolder").appendChild(img);
}

function resizeImage() {
 var imageSize = document.getElementById("img_id").width;
 var imageResize = imageSize * .5
 document.getElementById("img_id").width = imageResize;
}