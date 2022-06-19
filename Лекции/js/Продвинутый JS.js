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


//----------------------------Promise----------------------------

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

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all ждет выполнения всех промисов и только после этого выводит результат
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('ALL');
});

// Promise.race выполняеться когда самы первый промис сработал
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race');
});