'use strict';

const box = document.getElementById("box");

console.log(box);

//const btns = document.getElementsByTagName('button')[1];

//console.log(btns);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // получение первого тега с этим селектором

console.log(oneHeart);

const wrapper = document.querySelector('.wrapper');

//  box.style.backgroundColor = 'blue';

//  box.style.width = '500px';

const i = 700;

box.style.cssText = `background-color: blue; width: ${i}px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');

//const text = document.createTextNode("Тут был я");

div.classList.add('black');

//document.body.append(div);

wrapper.append(div); // метод вставляет в конец элемента родителя какой то элемент

//wrapper.prepend(div); // метод вставляет в начало родителя какой то элемент

// wrapper.appendChild(div);

// hearts[1].before(div); // вставить до элемента

//hearts[1].after(div); // втавить после элемента

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove(); // метод удаления элемента со страницы

// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]); // метод замененяет один элемент на друой

//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = "Hello";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');






