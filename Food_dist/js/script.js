'use strict';
// Не мое решение
// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//           function hideTabContent() {
//               tabsContent.forEach(item => {
//                    // item.style.display = 'none';
//                    item.classList.add('hide');
//                    item.classList.remove('show', 'fade');
//               });
//               tabs.forEach(item => {
//                     item.classList.remove('tabheader__item_active');
//               });
//           }
          
//           function showTabContent(i = 0) {
//               //tabsContent[i].style.display = 'block';
//               tabsContent[i].classList.add('show', 'fade');
//               tabsContent[i].classList.remove('hide');
//               tabs[i].classList.add('tabheader__item_active');
//           }

//           hideTabContent();
//           showTabContent();

//           tabsParent.addEventListener('click', (event) => {

//             const target = event.target;

//             if(target && target.classList.contains('tabheader__item')){
//                 tabs.forEach((item, i) => {
//                     if(target == item){
//                         hideTabContent();
//                         showTabContent(i);  
//                     }
//                 });
//             }

//           });

// });

//мое решение

window.addEventListener("DOMContentLoaded", () => {

const tabs = document.querySelectorAll('.tabheader__item'), // получаем псевдомассив divов с табами
      tabsContent = document.querySelectorAll('.tabcontent'), // получаем псемвдомассив divов с контентом и фотографиями
      tabsParent = document.querySelector('.tabheader__items'); //получаем родительский div с табами

function hideTabContent () { //функция скрывает контент
    tabsContent.forEach(item => {
           // item.style.display = 'none';
           item.classList.add('hide');
           item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
    });
}
function showTabContent(i = 0) { // функция показывает контент
    //tabsContent[i].style.display = 'block'; 
    tabsContent[i].classList.remove('hide'); 
    tabsContent[i].classList.add('show', 'fade');

    tabs[i].classList.add('tabheader__item_active');  
    }
    
hideTabContent();
showTabContent();
console.log(tabsContent[0]);
tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if (target == item){
                hideTabContent();
                showTabContent(i);
            }
        });
    } 
});


});
