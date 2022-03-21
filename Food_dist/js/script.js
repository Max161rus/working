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
////////////// Taбы
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
////////////// Taймер

/* const deadLine = '2022-02-26';

function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / 1000 * 60 * 60) % 24),
          minutes = Math.floor((t / 1000 * 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if(num >=0 && num < 10){
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0){
                    clearInterval(timeInterval);
                }
            }
}

setClock('.timer', deadLine); */

const dateEvent = prompt("Введите дату окончания акции в формате '0000-00-00'");//"2022-02-25"; //дата до которой надо 
                                                                                                //сделать таймер
console.log(new Date());

//функция вычисления времени
function calculationTime (inTime) {
	
	const time = Date.parse(inTime) - (Date.parse(new Date()) + (3 * 1000 * 60 * 60)),
		  timeDays = Math.floor(time / (1000 * 60 * 60 * 24)),
		  timeHours = Math.floor((time / (1000 * 60 * 60)) % 24),
		  timeMinutes = Math.floor((time / (1000 * 60)) % 60),
		  timeSeconds = Math.floor((time / 1000) % 60);
          
		  
	return {
		'total': time,
		'days': timeDays,
		'hours': timeHours,
		'minutes': timeMinutes,
		'seconds': timeSeconds
	};
}  
console.log(calculationTime(dateEvent));
//функция установки времени в теги
function setClock (selector , inTime) {
	
	const timer = document.querySelector(selector),
	      days = timer.querySelector('#days'),
		  hours = timer.querySelector('#hours'),
		  minutes = timer.querySelector('#minutes'),
		  seconds = timer.querySelector('#seconds');
		  const idTimer = setInterval(intervalClock, 1000);
          intervalClock ();

function intervalClock () { 


    const outFunction = calculationTime(inTime);
    if(outFunction.total <= 0){
          clearInterval(idTimer);
          days.innerHTML = '00';
		  hours.innerHTML = '00';
		  minutes.innerHTML = '00';
		  seconds.innerHTML = '00';
    } else {
		  days.innerHTML = setNull(outFunction.days);
		  hours.innerHTML = setNull(outFunction.hours);
		  minutes.innerHTML = setNull(outFunction.minutes);
		  seconds.innerHTML = setNull(outFunction.seconds);
    }
}
		  
			
}

function setNull (inTime) {
	
	if(inTime < 10) {
		inTime = "0" + inTime;
	} else {
		inTime = inTime;
	}
	return inTime;
}

setClock('.timer', dateEvent);


/////модальное окно

const modalTrigger = document.querySelectorAll("[data-modal]"), // получение элемента через data атрибут
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

function openModal (){
        // modal.classList.add('show');
        // modal.classList.remove('hide');
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden'; // чтоб страница не скролилась
    //    clearInterval(modelTimerId);
}

function closeModel(){
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        modal.classList.toggle('show');
        document.body.style.overflow = '';
}

modalTrigger.forEach((item) => {
    item.addEventListener('click', openModal);
});

modalCloseBtn.addEventListener('click', closeModel);

modal.addEventListener('click', (event)=>{
    if (event.target == modal){
        closeModel();
    }
});
document.addEventListener('keydown', (e)=>{ //событие по нажатию клавишь клавиатуры
if(e.code === "Escape" && modal.classList.contains('show')){
    closeModel();
}
});

//const modelTimerId = setTimeout(openModal, 5000);

// window.addEventListener('scroll', ()=>{
//  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
//     openModal();
//  }
// }, {once: true});  //настройки обрабочиков событий
// //идут после функции, являются объектами
//  в нашем случае не подходит
//отслеживает что функция уже выполнилась один раз

function showModalByScroll(){ //удаление обработчика событий
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal();
        window.removeEventListener('scroll', showModalByScroll); //удаляя событие
        }//ссылаемся на то событие и ту функцию которая при нем выполнялась
}

window.addEventListener('scroll', showModalByScroll); 

//использование классов для карточек

class MenuCard{
    constructor(src, alt, title, descr, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 27;
        this.chandgeToUAH();
    }

     chandgeToUAH(){
         this.price = this.price * this.transfer;
     }

    render(){
        const element = document.createElement('div');
        if (this.classes.length === 0){
           this.element = 'menu__item';
           element.classList.add(this.element);
        } else {
        this.classes.forEach(className => element.classList.add(className));
        }
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
           `;
        this.parent.append(element);
    }
}



//  const div = new MenuCard("img/tabs/vegy.jpg",
//  "vegy",
//  'Меню "Фитнес"',
//  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//  9,
//  '.menu .container');

//  console.log(div);

// div.render();



new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    "menu__item",
    "big"          
).render();

new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Премиум"',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container',
    "menu__item"
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .container',
    "menu__item"
).render();


 });
