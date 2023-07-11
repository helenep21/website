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
