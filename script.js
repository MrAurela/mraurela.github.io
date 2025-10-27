
let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");

showSlides(slideIndex);
setTimeout(timedNextSlide, 2000); // Change image every 2 seconds

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function setSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "flex";
}

function timedNextSlide() {
  nextSlide(1);
  setTimeout(timedNextSlide, 5000); // Change image every 2 seconds
}