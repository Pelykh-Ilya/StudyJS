"use strict";
// /*ООП  прототипное наследование*/

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('hello');
    }
};
const john = {
    health: 100
};

// john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);
const simon = Object.create(soldier);

console.log(john.armor);
john.sayHello();
simon.sayHello();

/* <script defer></script> скрипт загружаеться в фоновом режиме  */
/*<script async></script> не должен зависить от других скриптов и DOM дерева */
const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/some.js');