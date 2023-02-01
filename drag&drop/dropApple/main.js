'use strict';

const itemEl = document.querySelector('.item');
const placeholderEl = document.querySelectorAll('.placeholder');

itemEl.addEventListener('dragstart', dragStart)
itemEl.addEventListener('dragend', dragEnd)

placeholderEl.forEach((el) => {
    el.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    el.addEventListener('dragenter', (e) => {
        e.target.classList.add('hovered');
    })
    el.addEventListener('dragleave', (e) => {
        e.target.classList.remove('hovered');
    })
    el.addEventListener('drop', (e) => {
        e.target.classList.remove('hovered');
        e.target.append(itemEl);
    })
})

function dragStart(e) {
    e.target.classList.add('hold');
    setTimeout(() =>
        e.target.classList.add('hide'), 0
    )
}

function dragEnd(e) {
    e.target.className = 'item';
}
