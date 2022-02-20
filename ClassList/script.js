'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0)); //смотрим класс под индексом..

// console.log(btns[0].classList.add('red', 'm1')); //добавляем классы

// console.log(btns[0].classList.remove('blue')); //удалялем классы

// console.log(btns[0].classList.toggle('blue')); //если класс есть то будет убран, если его нет то наоборот добавлен.

// console.log(btns[0].classList.toggle('blue'));

// if (btns[0].classList.contains('red')){
// console.log('red');
// }

btns[0].addEventListener('click', () => {
// if (!btns[1].classList.contains('red')){
//     btns[1].classList.add('red');
// } else {
//     btns[1].classList.remove('red');
// }
btns[1].classList.toggle('red');
});

// console.log(btns[0].className); // className устарело и неиспользуется

//делегирование событий
//мы хотим что при клики на любую кнопку вызывалось одно и тожн событие
//в данном случае необходимо работать с родителем всех этих кнопок

//  wrapper.addEventListener('click', (event) => {
// // // console.dir(event.target);
//   if(event.target && event.target.tagName == "BUTTON"){
//       console.log('Hello');
//   }
// // if(event.target && event.target.classList.contains("blue")){
// //          console.log('Hello');
// //      }

//  });

 wrapper.addEventListener('click', (event) => {
    
      if(event.target && event.target.matches("button.red")){
          console.log('Hello');
      }
        
     });


//event содержит в себе всю информацию о элементе на котором происходит событие

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

