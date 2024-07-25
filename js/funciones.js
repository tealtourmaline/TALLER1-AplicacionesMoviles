// js/funciones.js

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselImages = document.querySelector('.carousel-images');
    const images = Array.from(carouselImages.children);
    const imageCount = images.length;
    let currentIndex = 0;

    // Asegura que el contenedor de imágenes tenga el ancho correcto
    carouselImages.style.width = `${imageCount * 100}%`;

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${currentIndex * (100 / imageCount)}%)`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageCount; // Mueve al siguiente índice cíclicamente
        updateCarousel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount; // Mueve al índice anterior cíclicamente
        updateCarousel();
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Opcional: Configura un intervalo para pasar las imágenes automáticamente
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
});
