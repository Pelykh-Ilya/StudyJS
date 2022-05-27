/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const promoAdv = document.getElementsByClassName('promo__adv');
// for (let elem of promoAdv) {
//     elem.remove();
// }

const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});


const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';

const promoBG = document.querySelector('.promo__bg');
promoBG.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat';
// promoBG.style.backgroundImage = 'url("img/bg.jpg")';

const interactiveItem = document.querySelectorAll('.promo__interactive-item');
for(let i = 0; i < movieDB.movies.length; i++) {
    interactiveItem[i].textContent = `${i+1}. `+movieDB.movies.sort()[i];
}
// interactiveItem.forEach((film, i) => {
//     interactiveItem[i].textContent = `${i+1}. ` + movieDB.movies.sort()[i];
// }); 

// Неудачная попытка нумерации, но рабочая смена тегов с неизменным содержимым))
// const interactiveList = document.querySelector('ul.promo__interactive-list');
// interactiveList.outerHTML = '<ol>'+interactiveList.innerHTML+'</ol>';
// console.log(interactiveList);