
// _________________________________________________________________________________
let currentSlide = 1;

function showSlide(n) {
  const slides = document.querySelectorAll('.image-column img');
  const sliderNumber = document.getElementById('sliderNumber');

  if (n > slides.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlide - 1].style.display = 'block';

  sliderNumber.textContent = currentSlide + '/' + slides.length ;
}

function nextSlide() {
  showSlide(currentSlide += 1);
}

function prevSlides() {
  showSlide(currentSlide -= 1);
}

showSlide(currentSlide);

// ______________________________________________________________________________________________________

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const imageContainer = document.getElementById('imageContainer');

const imageWidth = document.querySelector('#imageContainer img').clientWidth;
let currentIndex = 0;

prevButton.addEventListener('click', function() {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateGallery();
});

nextButton.addEventListener('click', function() {
  const maxIndex = imageContainer.childElementCount - 1;
  currentIndex = Math.min(currentIndex + 1, maxIndex);
  updateGallery();
});

function updateGallery() {
  const offset = -currentIndex * imageWidth;
  imageContainer.style.transform = `translateX(${offset}px)`;
}

updateGallery();

// _________________________________________________________________________________________

let currentSlides = 1;

function showSlider(n) {
  const slider = document.querySelectorAll('.image-column1 img');
  const sliderNumbers = document.getElementById('sliderNumber1');

  if (n > slider.length) {
    currentSlides = 1;
  }
  if (n < 1) {
    currentSlides = slider.length;
  }

  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
  slider[currentSlides - 1].style.display = 'block';

  sliderNumbers.textContent = currentSlides + '/' + slider.length ;
}

function nextSlider() {
  showSlider(currentSlides += 1);
}

function prevSlider() {
  showSlider(currentSlides -= 1);
}

showSlider(currentSlides);