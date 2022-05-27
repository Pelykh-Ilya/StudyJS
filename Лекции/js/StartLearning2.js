"use strict";
/*ООП  прототипное наследование*/

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
