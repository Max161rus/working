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