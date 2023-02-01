'use strict';

const itemEl = document.querySelector('.item');
const placeholderEl = document.querySelectorAll('.placeholder');

itemEl.addEventListener('dragstart', dragStart)
itemEl.addEventListener('dragend', dragEnd)

for (const placeholder of placeholderEl) {
    // dragover - показывает, что мы находимся над placeholder
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragDrop)
}

function dragStart(e) {
    e.target.classList.add('hold');
    // ф-ция setTimeout(() => ) позваляет делать задержку, в моем случае,
    // при перетаскивании элемента остается в элемент в руке, а на в спокойном состояние элемент исчезает 
    setTimeout(() =>
        e.target.classList.add('hide'), 0
    )
}

function dragEnd(e) {
    // className работает всегда со строчкой
    e.target.className = 'item';
    // запись выше равнозначна записи ниже:
    // e.target.classList.remove('hold');
    // e.target.classList.remove('hide');
    // e.target.classList.remove('hold', 'hide');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.target.classList.add('hovered');

}
function dragLeave(e) {
    e.target.classList.remove('hovered');

}
function dragDrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(itemEl);
}