// //Новые методы перебора массивов
// 'use strict';

// // filter

// // const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// // const shortNames = names.filter(function(name){
// //     return name.length < 5;
// // });

// // console.log(shortNames);

// // map

// // const answers = ['IvAn', 'AnnA', "Hello"];

// // const result = answers.map(item => item.toLowerCase());

// // console.log(result);

// // every
// // some // эти два метода возвращают булиново значение

// // const some  = [4, 'dda', 'ssefsdf'];

// // console.log(some.some(item => typeof(item) === 'number'));

// // console.log(some.every(item => typeof(item) === 'number'));

// // reduce

// // const arr = [4, 5, 1, 3, 2, 6];

// // const res = arr.reduce((sum, current) => sum + current);

// // console.log(res);

// // const arr = ['apple', 'pear', 'plum'];

// // // const res = arr.reduce((sum, current) => sum + ', ' + current);

// // const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// // console.log(res);


// // const arr = [4, 5, 1, 3, 2, 6];

// // const res = arr.reduce((sum, current) => sum + current, 3); //второй аргумент (3) это начальное значение

// // console.log(res);

// // const obj = {
// //     ivan: 'persone',
// //     ann: 'persone',
// //     dog: 'animal',
// //     cat: 'animal'
// // };

// // const newArr = Object.entries(obj)
// // .filter(item => item[1] === 'persone')
// // .map(item => item[0]);

// // console.log(newArr);

// // const films = [
// //     {
// //         name: 'Titanic',
// //         rating: 9
// //     },
// //     {
// //         name: 'Die hard 5',
// //         rating: 5
// //     },
// //     {
// //         name: 'Matrix',
// //         rating: 8
// //     },
// //     {
// //         name: 'Some bad film',
// //         rating: 4
// //     }
// // ];

// // function showGoodFilms(arr) {

// //      return  arr.filter(arrEl =>  arrEl.rating >= 8);    

// // }

// // showGoodFilms(films);

// // function showListOfFilms(arr) {

// //       return arr.map(item => item.name).join(', ');

// // }    

// // showListOfFilms(films);

// // let newArr = [];

// // function setFilmsIds(arr) {

// //     arr.forEach((element, key) => {
// //        element.id = key;
// //        newArr[key] = element;
// //    });

// // return arr;

// // }

// // setFilmsIds(films);

// // const tranformedArray = setFilmsIds(films);

// // console.log(tranformedArray);

// // function checkFilms(arr) {

// //     return arr.some(item => {
// //         if (item.id){
// //            return true;
// //         } else {
// //             return false;
// //         }
// //     });

// // }

// // checkFilms(tranformedArray);

// // const funds = [
// //     {amount: -1400},
// //     {amount: 2400},
// //     {amount: -1000},
// //     {amount: 500},
// //     {amount: 10400},
// //     {amount: -11400}
// // ];


// // const getPositiveIncomeAmount = (data) => {

// //     let fund = 0;

// //             data.map(item => {
// //                 if (item.amount >= 0){
// //                     fund = fund + item.amount;
// //                     }
// //                     });
// //             console.log(fund);
// //             return fund;

// // };

// // getPositiveIncomeAmount(funds);

// // const getTotalIncomeAmount = (data) => {

// //     const flag = data.some(item => item.amount < 0);

// //     console.log(flag);
// //     let summ = 0;

// //     if (flag) {
// //         data.map(item => {
// //             summ = summ + item.amount;    
// //         });
// //         console.log(summ);
// //         return summ;
// //     }else{
// //         getPositiveIncomeAmount(funds);
// //     }

// // };

// // getTotalIncomeAmount(funds);


// // const matrix = matrixNumber => {
// //     let number = 1;
// //     let matrix = [];
// //         for(let i = 0; i < matrixNumber; i++){
// //             matrix[i] = [];
// //         }

// //     for(let i = 0; i < matrixNumber; i++){
// //         matrix[0][i] = number;
// //         number++;
// //     } // number 4

// //     for(let i = 1; i <  matrixNumber; i++){
// //         matrix[i][matrixNumber - 1] = number;
// //         number++;
// //     } // number 6

// //     for(let i = (matrixNumber - 2); i >= 0; i--){
// //         matrix[matrixNumber - 1][i] = number;
// //         number++; // number 8
// //     }

// //     for(let i = (matrixNumber - 2); i > 0; i--){ // i = 1
// //         matrix[i][0] = number;
// //         number++;
// //     }

// //     for(let i = 1; i < matrixNumber - 1; i++){
// //         matrix[1][i] = number;
// //         number++;
// //     }
// //     for(let i = (matrixNumber - 3); i < matrixNumber - 1; i++){
// //         matrix[i][matrixNumber - 2] = number;
// //         number++;
// //     }


// //     console.log(matrix)
// // }

// // matrix(4);




// // const a = {
// //     a:0,
// //     b: {
// //         c:[1,2,3, {
// //             e:9
// //         }]
// //     }
// // }

// // const b = copyData(a);

// // b.b.c[3].e = 1000;

// // console.log(a, 'a');
// // console.log(b, 'b');

// const linearArray = array => {
//     const newArr = [];
//     let count = 0;

//     const writeArray = array => {
//         array.map(item => {
//             if (Array.isArray(item)) {
//                 writeArray(item);
//             } else {
//                 newArr[count] = item;
//                 count++;
//             }
//         });
//     }
//     writeArray(array);
//     return newArr;
// }

// const a = [1, 2, 3, [4], 4, 6, 'fsaljfjs', { a: 0 }]



// const b = a.map(item => item);

// b[3][0] = 10;

// //console.log(b)

// //console.log(a)

// const copyData = data => {
//     const newObj = {};
//     const newArr = [];

//     if (data === null || typeof (data) !== 'object') {
//         return data;
//     }

//     if (Array.isArray(data)) {
//         data.map((item, key) => {
//             if (typeof (item) !== 'object') {
//                 newArr[key] = item;
//             } else {
//                 newArr[key] = copyData(item);
//             }
//         });
//         return newArr;
//     }

//     if (typeof (data) === 'object') {
//         for (let key in data) {
//             if (typeof (data[key]) !== 'object') {
//                 newObj[key] = data[key];
//             } else {
//                 newObj[key] = copyData(data[key]);
//             }
//         }
//         return newObj;
//     }
// }

// const a1 = {
//     a: 0,
//     b: 1,
//     c: {
//         d: {
//             e: [1,2,3]
//         }
//     },
//     f: 128
// }




// const newCopyData = data => {

//     const newObj = {};
//     const newArr = [];

//     if (data === null || typeof (data) !== 'object') {
//         return data;
//     }

//     if (Array.isArray(data)) {
//         data.forEach((item, index) => {
//             newArr[index] = newCopyData(item);
//         });
//         return newArr;
//     }

//     if (typeof (data) === 'object') {
//         for (let key in data) {
//             newObj[key] = newCopyData(data[key]);
//         }
//         return newObj;
//     }

// }

// // const b1 = newCopyData(a1);

// // console.log(a1);

// // b1.c.d.e[0] = 100

// // console.log(b1);

// const newArr = [1, 2, 3, 4, 5];

// const viewArr = el => console.log(el * 2);

// newArr.map(viewArr);

// console.log(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__)

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log(matrix);


const rotate = matrix => {
    const newArr = []; 

    let row = matrix.length - 1;
    let col = 0;

    for (let i = 0; i < matrix.length; i++){
        newArr[i] = [];
    }

    for (let j = 0; j < matrix.length; j++){
        for (let i = 0; i < matrix.length; i++){
            newArr[j][i] = matrix[row][col];
            row--;
        }
        row = matrix.length - 1;
        col++;
    }

    return newArr;
}

//console.log(rotate(matrix))

const newRotate = matrix => {
    return matrix.map((item, index) => matrix.map(item => item[index]).reverse())
}

const btn = document.querySelector('button');

btn.style.backgroundColor='red'

const h = document.querySelector('h1');

btn.addEventListener('click', () => {
    h.innerText = 'Hello MAMA'
})

let a = 5;

let b = a;


b = 10

const c = [1, 2, 3]

const d = c.map(item => item);

c[0] = 5000

console.log(c, 'c')
console.log(d, 'd')