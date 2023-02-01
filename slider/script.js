'use strict';

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
// mainSlide.querySelectorAll('div') - показывает массив и коллекцию всех дивов, в моем случае, слайдов в виде массива и коллекции.
// с помощью .length, я узнаю их общее число. Число дивов
// свойство .length показывает в виде цифры
const slidesCount = mainSlide.querySelectorAll('div').length;

// переменая activeSlideIndex будет показывать, какой слайд активный
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

// поддержка клавиатуры, то есть я могу не только с помощью кнопки
// слайды листать, но и с помощью кнопок на клавиатуре
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
});

// сделала прокрутку вниз и вверх колесиком мышки
document.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        changeSlide('up');
    } else if (event.deltaY > 0) {
        changeSlide('down');
    }
});

// ф-ция changeSlide() передает направление куда я кликаю по кнопке
function changeSlide(direction) {
    // если мы нажали на вверх
    if (direction === 'up') {
        // то прибавляет один слайд
        activeSlideIndex++;
        // и если наш активный слайд равен 4, то есть slidesCount = общему к-ву всех слайдов, следоввательно, мы вышли за рамки
        if (activeSlideIndex === slidesCount) {
            // то сделать активный слайд = 0 
            activeSlideIndex = 0;
        }
        // если мы нажали вниз
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    // переменная размерности экрана
    const height = container.clientHeight

    // анимация, чтобы синхронно блок с градиентом и блок с картинкой верно двигались
    // минус translateY(- .......) - влияет только на направление, то есть будет опускаться или подниматься слайд
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}