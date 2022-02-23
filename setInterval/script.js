'use strict';
const btn = document.querySelector(".btn");
let  timerId,
     i = 0;

     function myAnimation(){
         const elem = document.querySelector('.box');
         let pos = 0;
         const id = setInterval(frame, 10);
         function frame(){
             if (pos == 300){
                 clearInterval(id);
             
             } else {
                pos++;
                 elem.style.top = pos + "px";
                 elem.style.left = pos + "px";
             }
         }
     }
    

     btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
// //    const timerId = setTimeout(logger, 2000);
//  timerId = setInterval(logger, 200);
// });

// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'hello');

// console.log(timerId); // уникальный идентификатор таймера

 


// function logger () {
//     i++;
//     console.log(i,'text');
//      if (i == 3) {
//         clearInterval(timerId);//функция сброса таймера
//      }
    
    
    
    
// }

// const timerId1 = setTimeout(logger, 2000);

// console.log(typeof(timerId1));

// let id = setTimeout(function log () {
//     console.log("hello");
//     id = setTimeout(log, 500);
// }, 500);

///////////////////////////////////////////////////////////работа с датами///////////////////////////////////////////////////////////

// const now = new Date('2022-02-23');

// console.log(now);

// const now = new Date(2020, 5, 1, 20);

//  console.log(now);


//  const now = new Date(0); // передаем количество мс
// //получить год до 1970 - пишем отрицательное значение мс
//  console.log(now);


const now = new Date('2020-05-01');
//new Date.parse ('2020-05-01');

// console.log(now.getFullYear()); // год

// console.log(now.getMonth()); // месяц (считается с нуля)

// console.log(now.getDate()); //дата(число)

// console.log(now.getDay()); //день недели

// console.log(now.getHours()); //часы

// console.log(now.getUTCHours()); //часы по ЮТИСИ

//console.log(now.getTimezoneOffset()); // разница между часовым поясом и ЮТС в минутах

//console.log(now.getTime()); //количество мс прошедших с 1 января 1970 года

//методы установки даты, все теже самые только идут с set

// console.log(now.setHours(18, 40)); // установили часы и минуты

// console.log(now);

///измерение интервалов

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3; // i возводим в 3ю степень
}

let end = new Date();

alert(`цикл отработал за ${end - start} мс`); // ${} -интерполяция

//операции с помощью которых смотрят на производительность чегото называются БЕНЧМАРКИ


