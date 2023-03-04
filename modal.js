// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var img2 = document.getElementById("img2");
var modalImg2 = document.getElementById("img01");
var captionText2 = document.getElementById("caption");
img2.onclick = function(){
  modal.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

var img3 = document.getElementById("img3");
var modalImg3 = document.getElementById("img01");
var captionText3 = document.getElementById("caption");
img3.onclick = function(){
  modal.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

var img4 = document.getElementById("img4");
var modalImg4 = document.getElementById("img01");
var captionText4 = document.getElementById("caption");
img4.onclick = function(){
  modal.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

var img5 = document.getElementById("img5");
var modalImg5 = document.getElementById("img01");
var captionText5 = document.getElementById("caption");
img5.onclick = function(){
  modal.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}