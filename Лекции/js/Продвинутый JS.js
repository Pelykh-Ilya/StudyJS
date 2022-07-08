"use strict";

// //----------------------------JSON----------------------------

// const persone = {
//     name: 'Alex',
//     tel: '+4777777',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };

// console.log(JSON.stringify(persone));

// const jsonSTR = JSON.stringify(persone);
// console.log(JSON.parse(jsonSTR));

// // Глубокая копия
// const clone = JSON.parse(JSON.stringify(persone));
// console.log(clone);
// clone.parents.mom = 'Tanya';
// console.log(persone);
// console.log(clone);


// // ----------------------------Promise----------------------------

// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };
//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'ordered';
//             resolve(product);
//             // reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// // Promise.all ждет выполнения всех промисов и только после этого выводит результат
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('ALL');
// });

// // Promise.race выполняеться когда самы первый промис сработал
// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('Race');
// });

// //----------------------------Методы перебора массивов----------------------------

// // filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// // map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// // every/some(возвращает true или false)

// const some = [4, 'qwq', 'stewrgs'];

// console.log(some.some(item => typeof(item) === "number"));
// console.log(some.every(item => typeof (item) === "number"));

// // reduce (собирать массив в одно единое целое)

// const arr = [4, 5, 1, 3, 2, 6];
// // после функции через запятую можно передать начальное значение
// const res = arr.reduce((sum, current) => sum + current, 21);
// console.log(res);

// const arr2 = ['apple', 'pear', 'plum'];

// const res2 = arr2.reduce((sum, curent) => `${sum}, ${curent}`, 'orange');
// console.log(res2);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] == 'persone')
// .map(item => item[0]);

// console.log(newArr);


// Регулярные выражения

// new RegExp('pattern', 'flags');
// /pattern/flags;

// const ans = prompt('Enter your number');

// const reg = /n/ig;
// console.log(reg.test(ans));

// const reg = /\d/g;
// console.log(ans.match(reg));


// флаги : i - вне зависимости от регистра; g - найти несколько фхождений; m - многострочный режим;
// классы : \d - цифры; \w - слова; \s - пробелы
// обратные классы: \D - не числа; \W - не буквы;

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Enter your password');

// console.log(pass.replace(/\./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));