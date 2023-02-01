'use strict';

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide');
    // slides.forEach((el) =>
    //     el.addEventListener('click', () => {
    //         el.classList.toggle('active');
    //     }));

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClassed();
            slide.classList.add('active');
        });
    }

    function clearActiveClassed() {
        slides.forEach((el) => {
            el.classList.remove('active');
        })
    }
}

slidesPlugin(4)
