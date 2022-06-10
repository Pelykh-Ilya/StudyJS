"use strict";
// ---------------------------ООП  прототипное наследование---------------------------

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

// // <script defer></script> скрипт загружаеться в фоновом режиме  
// //<script async></script> не должен зависить от других скриптов и DOM дерева 
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

// ---------------------------Работа с датами---------------------------

// const now = new Date();

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i**3;
// }

// let end = new Date();

// console.log(`цикл отработал за ${end - start} мс`);

// // now.setHours(18);
// // console.log(now);

// // console.log(now);
// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getDay());
// // console.log(now.getHours());
// // console.log(now.getUTCHours());

// // console.log(now.getTimezoneOffset());
// // console.log(now.getTime());
// // console.log(new Date(1654231167458));

// const timeZone = now.getHours() - now.getUTCHours();
// console.log(timeZone);

// // ---------------------------Функции-конструкторы---------------------------

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function sayHello() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ilya = new User('Ilya', 31);
// const ivan = new User('Ivan', 27);

// ivan.exit();

// ilya.hello();
// ivan.hello();

// console.log(ilya);
// console.log(ivan);

//---------------------------Контекст вызова (this)---------------------------

// // 1. Обычная функция this = Window, но если стоит 'use strict' то undefined
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// } 

// showThis(4, 5);

// // 2. Контекст(this) у методов обьекта - это сам обьект

// const obj = {
//     a: 20, 
//     b: 15,
//     sum: function () {
//         console.log(this);
//     }
// };

// obj.sum();

// // 3.  This в конструкторах и классах - это новый экземпляр обьекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function sayHello() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User('Ivan', 23);

// // 4. Ручное присвоение контекста(this): call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John',
//     age: 22
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// // Метод bind СОЗДАЕТ НОВУЮ ФУНКЦИЮ!!! связанную с определенным контекстом

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2;
// console.log(double(5));

// // ---------------------------Классы---------------------------

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(5, 5);
// console.log(square.calcArea());

// //Наследование (extends). super - вызывает конструктор родителя
// class ColoreRectangeWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text =text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoreRectangeWithText(10, 20, 'Hello', 'yelow');
// console.log(div.calcArea());
// div.showMyProps();