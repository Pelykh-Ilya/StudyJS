"use strict";

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circle = document.getElementsByClassName("circle"),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
      
//инлайн стили в HTML, они выполняються первее CSS
box.style.backgroundColor = "green";
box.style.width = '300px';
// таже запись
box.style.cssText = 'background color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circle[2].style.backgroundColor = 'yellow';
circle[0].style.background = 'linear-gradient(blue, yellow)';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "purple";
}

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
div.classList.add('black');

// в коментариях старые методы
document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div);

wrapper.prepend(div);
hearts[1].before(div);
hearts[1].after(div);
// wrapper.insertBefore(div, hearts[0]);

circle[1].remove();
// wrapper.removeChild(circle[1]);

hearts[1].replaceWith(circle[1]);
// wrapper.replaceChild(circle[1], hearts[1]);

// div.innerHTML = 'Hello World';
div.innerHTML = '<h1>Hello World</h1>';
//если нужен только текст без HTML то используем textContent
// div.textContent = '<h1>Hello World</h1>';
div.style.cssText = 'width: 250px; height: 150px';

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');