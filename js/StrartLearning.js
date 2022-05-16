"use strict";

// /*Объект */

const obj = {
    name: "Ilya",
    age: 32,
    isMarried: true
};

console.log(obj.name);
console.log(obj['age']);

// /*Массив (array) в строгом порядке*/

let arr = ['plum.pmg', 'orange.jpg', 6, 'apple.bmp', {a: 2, b: 3}, [5, 8, 6]];
console.log(arr[5]);
alert("hello");
const result = confirm("Are you here?");
console.log(result);

/*если добавить +prompt то выход не строка а число */

const answer = prompt("Вам есть 18?", "18");
console.log(typeof(answer));
const answers = [];
answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your second name?", "");
answers[2] = prompt("how old are your?", "");
console.log(typeof(answers));
const categories = 'toys';

/*до ES6 */

console.log('https://someuerl.com/' + categories);

/*интерполяция(Использавать ` вместо ' и ${} ) */

console.log(`https://someuerl.com/${categories}/5`);
const username = "Illya";
alert(`Hello ${username}!`);
let incr = 10,
    decr = 10;
    
/*оператор инкримента(+1) и декримента(-1) (постфиксная форма) */

incr++;
decr--;
console.log(incr, decr);

 /*Префиксная форма (постфиксная форма не работает)*/

console.log(++incr, --decr);

/*сравнение ==(только по значению) строгое сравнение ===(и по типу данных) */

console.log(2*4 == "8");
console.log(2*4 ==="8");

/*оператор и && оператор или || */
/*Оператор отрицания ! */

const isChecked = true,
      isClose = true;
console.log(isChecked && !isClose);

/* Условия*/

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100){
    console.log("Too much");
} else {
    console.log(`Your number is ${num}`);
} 
/*Тернанрный оператор */

const num1 = 49;
(num1 === 50) ? console.log("Ok!") : console.log("Not ok");

/*Switch только на строгое соответствие(===) */

const num2 = 50;

switch(num2) {
    case 49:
        console.log("Неверно");
        break;
    case 100:
        console.log("Неверно");
        break;
    case 50:
        console.log("Угадал");
        break;
    default:
        console.log("Не в это раз");
        break;
}

/*Циклы */

let num3 = 50;

while (num3 < 55) {
    console.log(num);
    num3++;
}

do {
    console.log(num3);
    num3++;
}
while (num3 < 55);

/*Задаем переменную; условие ;шаг */
for (let i = 1; i < 8; i++) {
    console.log(num3);
    num3++;
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
}

/*Функции */
/* function declaration вызываються в любом месте кода, т.к. загружаються сразу*/

let num4 = 20;

function showFirstMesage (text) {
    console.log(text);
    let num4 = 10;
    console.log(num4);
}

showFirstMesage('Hello');
console.log(num4);

function calc(a, b) {
    return(a + b);
}

console.log(calc(5, 3));
console.log(calc(4, 8));

function ret() {
    let num4 = 50;
    return num4;
}

const anotherNum = ret();
console.log(anotherNum);

/* Function expression вызываеться только после обьявления*/

const logger = function() {
    console.log("Hello World");
};

logger();

/* Стрелочные функции*/

const calculate = (a, b) => a + b;

console.log(calculate(5, 3));