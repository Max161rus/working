'use strict';

const btn = document.querySelectorAll('button'),
            overlay = document.querySelector('.overlay');

           

// btn.onclick = function(){
//     alert("click");
// }; 

// btn.onclick = function(){
//     alert("click second");
// }; //этот способ не используется
//если вызвать два раза то второй сотрет первый

// btn.addEventListener("click", () => {
//     alert("click");
// });//если вызвано одно за другим то выполняется последовательно

// btn.addEventListener("click", () => {
//     alert("click second");
// });



//  btn.addEventListener("click", (event) => {
//          console.log("click");
//          event.target.style.backgroundColor = 'red';
//      });// выполняется при клике


//     btn.addEventListener("mouseenter", (event) => {
//        // console.log(event.target);
//        // console.log("click");
//       // const a = event.target; // получили в переменную элемент кнопку
//       // a.style.backgroundColor = 'red'; //изменили кнопке свойства
//       //Или сделаем это по другому
//       event.target.style.backgroundColor = 'yellow';
//     });// выполняется при наводе мыши
// let i = 0;
const deleteElement = (event) => {
   // event.target.remove();
   console.log(event.currentTarget);
   console.log(event.type);
//    i++;
//    if(i == 1){
//     btn.removeEventListener("mouseenter", deleteElement); //удаляем обработчик событий
//    }
};
///всплытие событий
// btn.addEventListener("click", deleteElement);// выполняется при наводе мыши

// overlay.addEventListener("click", deleteElement);




//отмена страндартного поведения в браузере

btn.forEach(btn => {
    btn.addEventListener("click",deleteElement, {once: true}); //третий аргумент - объект который оменяет повторную оюработку событий
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
event.preventDefault(); // Отменили событие перехода по ссылке
console.log(event.target);
});