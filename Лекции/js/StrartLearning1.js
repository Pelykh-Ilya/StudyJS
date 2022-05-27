"use strict";

/*Объект */

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
    console.log(num3);
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

/*Методы и свойства строк и чисел */

const str = "teSt";

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello World";
console.log (logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.substring(6, 11));
/*1й аргумент начало, второй аргумент длина */
console.log(logg.substr(6, 3));

const num5 = 12.2;
console.log(Math.round(num5));

const test2 = '12.2px';
console.log(parseInt(test2));
console.log(parseFloat(test2));

/*Callback функции */

function first() {
    // do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`i am learning ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});

/*Обьекты */

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
};

// delete options.name;
// console.log(options);


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

/*нет obj.length поэтому скитать длину только через counter или Object.keys(options) 
выводит массив ключей и у него есть length */
let counter = 0; 
for (let key in options) {
    counter++;
}
console.log(counter);

console.log(Object.keys(options).length);

/*Деструктуризация обьекта */

const {border, bg} = options.color;
console.log(border);

/*Массивы (array)  */

const arr1 = [1, 222, 34, 26, 8];
arr.sort();
console.log(arr);
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}
const arrPop = arr.pop();
console.log(arr);
console.log(arrPop);
arr.push(9);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(`под индексом ${i} находиться ` + arr[i]);
}

for (let value of arr) {
    console.log(value);
}
arr.forEach(function(item, index, arr) {
    console.log(`${index}: ${item} внутри массива ${arr}`);
});

const str1 = prompt("", "");
const products = str.split(", ");
console.log(products);
console.log(products.join("; "));

/*Передача по ссылке */

let a = 5,
    b = a; //Передаеться значение
b =  b + a;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //Передаеться ссылка на обьект
copy.a = 10;
console.log(copy);
console.log(obj);

/*Клонирование обьекта, поверхностная копия объекта */
function copy1(mainObj) {
    let objCopy = {};
    for(let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy1(numbers);
newNumbers.a = 20;
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 100;
console.log(clone);
console.log(add);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "X";
console.log(newArray);
console.log(oldArray);

/*Спред операторы(...) */

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['wordpress', 'livejournal', 'blogger'],
      internet =[...video, ...blog, 'vk', 'intagramm'];
console.log(internet);

const newAaray = [...oldArray];
const newObj = {...numbers};
console.log(numbers);
