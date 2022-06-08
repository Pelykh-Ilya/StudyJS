"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'anotherClass'));
// console.log(btns[0].classList.remove('blue'));
// // togle если есть класс - удаляет, еслинет - добавляет 
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// Делигирование событий 

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log('Hello');
    // }
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('blue');
    // }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);