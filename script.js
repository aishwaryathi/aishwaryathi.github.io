let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".old-project-card");
  const totalSlides = slides.length;

  // Calculate new index
  currentIndex += direction;

  // Wrap around if needed
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Move slider
  const slideWidth =
    slides[0].clientWidth + parseInt(getComputedStyle(slider).gap);
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
