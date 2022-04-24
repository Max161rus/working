//Новые методы перебора массивов
'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['IvAn', 'AnnA', "Hello"];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// every
// some // эти два метода возвращают булиново значение

// const some  = [4, 'dda', 'ssefsdf'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// // const res = arr.reduce((sum, current) => sum + ', ' + current);

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3); //второй аргумент (3) это начальное значение

// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
    
//      return  arr.filter(arrEl =>  arrEl.rating >= 8);    
    
// }

// showGoodFilms(films);

// function showListOfFilms(arr) {

//       return arr.map(item => item.name).join(', ');

// }    

// showListOfFilms(films);

// let newArr = [];

// function setFilmsIds(arr) {

//     arr.forEach((element, key) => {
//        element.id = key;
//        newArr[key] = element;
//    });

// return arr;

// }

// setFilmsIds(films);

// const tranformedArray = setFilmsIds(films);

// console.log(tranformedArray);

// function checkFilms(arr) {

//     return arr.some(item => {
//         if (item.id){
//            return true;
//         } else {
//             return false;
//         }
//     });
    
// }

// checkFilms(tranformedArray);

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];


const getPositiveIncomeAmount = (data) => {

    let fund = 0;

            data.map(item => {
                if (item.amount >= 0){
                    fund = fund + item.amount;
                    }
                    });
            console.log(fund);
            return fund;

};

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {

    const flag = data.some(item => item.amount < 0);

    console.log(flag);
    let summ = 0;

    if (flag) {
        data.map(item => {
            summ = summ + item.amount;    
        });
        console.log(summ);
        return summ;
    }else{
        getPositiveIncomeAmount(funds);
    }

};

getTotalIncomeAmount(funds);




