"use strict";
// /*ООП  прототипное наследование*/

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('hello');
//     }
// };
// const john = {
//     health: 100
// };

// // john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);
// const simon = Object.create(soldier);

// console.log(john.armor);
// john.sayHello();
// simon.sayHello();

// /* <script defer></script> скрипт загружаеться в фоновом режиме  */
// /*<script async></script> не должен зависить от других скриптов и DOM дерева */
// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }

// loadScript('js/test.js');
// loadScript('js/some.js');

/*Работа с датами */

const now = new Date();

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i**3;
}

let end = new Date();

console.log(`цикл отработал за ${end - start} мс`);

// now.setHours(18);
// console.log(now);

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(new Date(1654231167458));

const timeZone = now.getHours() - now.getUTCHours();
console.log(timeZone);