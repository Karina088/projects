'use strict';

const boardEl = document.querySelector('#board');
// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22']
const colors = ['#2ecc71', '#bdd0410', '#82f278', '#d84ee4', '#44d8e8', '#4a46b6', '#d26565', ' #e2dbdb', ' #f80296']
const SQUARES_NUMBER = 600;


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const squareEl = document.createElement('div');
    squareEl.classList.add('square');

    squareEl.addEventListener('mouseover', setColor);

    squareEl.addEventListener('mouseleave', removeColor);

    boardEl.append(squareEl);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

