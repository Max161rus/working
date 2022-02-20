'use strict';

//события в мобильных устройствах

//touchstart - срабатывает при косании к этому элементу

//touchmove - срабатывает при смещении пальца по элементу

//touchend - как только палец оторвался от элемента событие выполнилось

// touchenter - срабатывает когда ведем пальцем по экрану и наскакиваем
// на элемент с этим событием

//touchleave - срабатывает при скольжении пальца по элементу

//touchcansel - срабатывает когда палец скользит и выходит за пределы браузера

// window.addEventListener('DOMContentLoaded' , () => {
// const box = document.querySelector('.box');

// box.addEventListener('touchstart', (e) => {
// e.preventDefault();
// console.log("Start");
// console.log(e.touches);
// console.log(e.targetTouches);
// });

// box.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     console.log("Move");
//     console.log(e.targetTouches[0].pageX); // обращаемся к пальцу [0] и получаем координаты Х
//     });


//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();
//         console.log("End");
//         });

// });


// свойства при работе с сенсорными устройствами

//1) touches - выдает список всех пальцев которые 
// сейчас взаимодействуют с экраном (не важно где они находятся)

//2) targetTouches - все пальцы которые взаимодействуют с конкретным элементом

//3) changedTouches - список пальцев которые участвуют в текущем событии
// например если событе touchend то список будет содержать палец который
// щас убран, даже если остальные 4 пальца у нас остались на экране


const p = document.querySelectorAll('p');

console.log(p);



function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("test.js"); // загрузка скриптов последовательно
loadScript("some.js");