'use strict';

//document это объект в котором содержится вся html структура
//window это окно в котором показывается документ
//screen весь видимый монитор (системные панели в него тоже входят)

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
let i = 0;

// const width = box.clientWidth;
// const height = box.clientHeight;

const width = box.offsetWidth;
const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;


console.log(width, height);

btn.addEventListener('click', () => {

        // box.style.height = box.scrollHeight + 'px';   
        console.log(box.scrollTop);
    
});

console.log(box.getBoundingClientRect().top); // метод получающий координаты элемента, 
//левая правая верхняя и нижняя границы
//координаты рассчитываются от левого верхнего угла и левой границы окна
//и от верхней границы
const style = window.getComputedStyle(box); // получение компьютед стайлов (стили из CSS) которые применились к элементу
//стили которые идут со скрипта - инлайн стили
//инлайн стили прописываются прямо в тег
//компьютед стайлы из css можно только получить но менять нельзя
//но их можно перебить инлайн стилями которые более приоритетнее
console.log(style.display); 

// с помощью метода выше можно получить стили псевдоэлементов

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

console.log(window.scrollBy(0, 400));//аргументы x и  y относительно от текущего положения

console.log(window.scrollTo(0, 400));//аргуметны х и у относительно начала старницы

