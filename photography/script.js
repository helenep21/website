const carousels = document.querySelectorAll('.project');

carousels.forEach((carousel) => {
  const prevBtn = carousel.querySelector('#prev-btn');
  const nextBtn = carousel.querySelector('#next-btn');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const caroulelDiv = carousel.querySelector('.carousel');

  let currentIndex = 0;

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    console.log("prev")
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    console.log("next")
    updateCarousel();
  });

  function updateCarousel() {
    console.log(currentIndex)
    console.log(carouselItems)
    carouselItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add('active');
        caroulelDiv.style.transform = `translateX(-${currentIndex * 100}%)`;
        console.log("move")
      } else {
        item.classList.remove('active');
      }
    });
  }

  updateCarousel();
});

function openImage(src) {
  const overlay = document.getElementById("imageOverlay");
  const overlayImage = document.getElementById("overlayImage");
  
  overlayImage.src = src;
  overlay.style.display = "flex";
  document.addEventListener('keydown', handleKeyPress);
}

function closeImage() {
  const overlay = document.getElementById("imageOverlay");
  
  overlay.style.display = "none";
  document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeImage();
  }
}