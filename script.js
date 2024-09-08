const carousel = document.getElementById('carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;
const totalSlides = carouselItems.length;

 function updateCarousel() {
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

 function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

 setInterval(autoSlide, 3000);

 updateCarousel();
