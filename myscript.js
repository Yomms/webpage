function myFunction() {
	var selectBox = document.getElementById("cars");
	selectBox.remove(selectBox.selectedIndex);
}
 
function showImage() {
	var img = document.createElement("img");
	img.src = "Dome.jpg";
	img.height = 500;
	img.width = 500;

	document.getElementById("imageHolder").appendChild(img)
}

function resizeImage() {
	img {
    width: 50%;
    height: auto;
}
}