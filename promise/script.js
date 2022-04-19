//Промисы (обещания)

'use strict';

// пример кода Callback Hall, когда друг за другом идет куча асинхронного текста

// console.log('Запрос данных...');

// setTimeout(()=>{
// console.log('Подготовка данных...');

// const product = {
//     name: 'TV',
//     price: 2000
// };

// setTimeout(()=> {
//     product.status = 'order';
//     console.log(product);
// }, 2000);

// }, 2000);

//далее идет примеры промисов

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){ // колбек функция в промисе всегда принимает 2 аргумента
//     setTimeout(()=>{
//         console.log('Подготовка данных...');
        
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
        
//         resolve(product);
        
//         }, 2000);
// });



// req.then((product) => { //метод выполняется на промисе в случае положительного исхода
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             product.status = 'order';
//             resolve(product);
//           // reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => { //метод обрабатывает reject (если что то пошло не так)
//     console.error('Произошла ошибка!');
// }).finally(() => { //метод который выполняется при любом исходе промисы
//     console.log('Finally');
// });



//метод then выполняет функцию resolve
//метод catch выполняет функцию reject

//иные методы промисов

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000),test(5000)]).then(() => { // отслеживает выполнение всех промисов, ориентируется на выполнение последнего
    console.log('All');
});

Promise.race([test(1000),test(5000)]).then(() => { //отслеживает какой промис выполнится первым
    console.log('Race');
});
























    
