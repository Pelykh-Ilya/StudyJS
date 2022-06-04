'use strict';
// события на мобильных устройствах

// touchstart - при возникновении касания к элементу
// touchmove - при касании к элементу двигаеться по нему
// touchend - при отпускании пальца с элемента
// touchenter - когда ведем пальцем по экрану и наскакиваем на элемент
// touchleave - когда ведем пальцем по элементу и уходим за его пределы
// touchcancel - палец за пределами браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();

        console.log("touch!");
        console.log(event.touches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log("touchmove!");
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();

        console.log("touchend!");
    });
});

// .touches - список всех пальцев которые взаимодействуют с экраном
// .targetTouches - список всех пальцев которые взаимодействуют с елементом
// .changedTouches - список пальцев которые учавствуют в этом событии

// есть готовая библиотека для событий с пальцами Hammer.js