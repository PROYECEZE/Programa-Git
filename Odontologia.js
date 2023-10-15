let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Iniciar el carrusel
showSlide(slideIndex);

// Puedes agregar un temporizador para que el carrusel se mueva automáticamente
setInterval(nextSlide, 5000); 

// Cambia la imagen cada 5 segundos