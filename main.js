let images = [
  './img-home/image1.png',
  './img-home/image3.png',
  './img-home/image4.png',
  './img-home/image2.png'
];
let currentIndex = 0;
const intervalTime = 3000; 

function changeImage() {
  document.getElementById('picture').style.background = `url('${images[currentIndex]}') center center / cover`;
  currentIndex = (currentIndex + 1) % images.length; 
}

setInterval(changeImage, intervalTime);

function toggleNavbar() {
    var navbarList = document.getElementById("navbarList");
    if (navbarList.style.display === "block") {
      navbarList.style.display = "none";
    } else {
      navbarList.style.display = "block";
    }
  }
  
  window.addEventListener('resize', function ()  {
      const navbarList = document.getElementById("navbarList");
      if(window.innerWidth > 720){
        navbarList.style.display = "flex"
      } else {
        navbarList.style.display = "none"
      }
    });