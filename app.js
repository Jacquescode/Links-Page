const btn = document.querySelector(".dark-button");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const darkP = document.querySelector(".portrait");

btn.addEventListener("click", function() {
  container.classList.toggle("dark-mode");
  nav.classList.toggle("dark-nav");
  darkP.classList.toggle("dark-portrait");
});

function chngimg () {
var img = document.getElementById("library").src;
if (img.indexOf('mars.png')!=-1) {
  document.getElementById('library').src  = 'Images/earth.png';
}
else {
 document.getElementById('library').src = 'Images/mars.png';
}

}