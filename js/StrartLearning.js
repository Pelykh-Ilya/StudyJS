"use strict";
// /*Объект */
const obj = {
    name: "Ilya",
    age: 32,
    isMarried: true
};
console.log(obj.name);
console.log(obj.age);
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
