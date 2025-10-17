// Slide navigation for the deck
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
let currentSlide = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    if (i === idx) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  slideCounter.textContent = `${idx + 1} / ${slides.length}`;
  
  // Update button states
  prevBtn.disabled = idx === 0;
  nextBtn.disabled = idx === slides.length - 1;
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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }
});

// Initialize
showSlide(currentSlide);
