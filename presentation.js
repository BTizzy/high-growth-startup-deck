// Slide navigation for the deck
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
let currentSlide = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.style.display = i === idx ? 'flex' : 'none';
  });
  slideCounter.textContent = `${idx + 1} / ${slides.length}`;
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

// Initialize
showSlide(currentSlide);
