let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Implementar arrastrar
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = e.clientX;
        carousel.style.transition = 'none';
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            carousel.style.transition = 'transform 0.5s ease';
            const movedBy = (currentTranslate + currentIndex * 100) / window.innerWidth;
            if (movedBy > 0.25) currentIndex--;
            if (movedBy < -0.25) currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const currentPos = e.clientX;
            const diff = currentPos - startPos;
            currentTranslate = diff / window.innerWidth * 100;
            carousel.style.transform = `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}%))`;
        }
    });
});
