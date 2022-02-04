
"use strict";
/*

a = 15;

console.log(a)

console.log(1);
let number = 5;
const leftBorderWidth = 1;
 
number = 10;

console.log(number);

//leftBorderWidth = 5;

console.log(leftBorderWidth);

const obj = {
    a: 0
};

obj.a = 25;

console.log(obj.a);

var name = "ivan";

{
    let max = 10;

}
console.log(max);
*/
//
//alert('fuck')
//const result = confirm("are you her");
//console.log(result)

//(result) ? console.log("долбоебы_тру"):console.log("пидарасты_фалс")
//const answer = +prompt("вам есть 18?", "18") ;

//console.log(typeof(answer))
/*
const answers = [];

answers[0] = prompt('как ваше имя?', '' );
answers[1] = prompt('как ваша фамилия?', '' );
answers[2] = prompt('сколько вам лет?', '' );
console.log(typeof(answers));
document.write(answers);
*/
/*
const category = 'toys';

console.log(`https://someurl.com/${category}/5`);


const user = 'Ivan';

alert(`Hello, ${user}`);
*/
/*
console.log('arr'+ "-object");
console.log(4 + +'5');

let incr = 10,
decr = 10;

//incr++;
//decr--;

console.log(++incr)

console.log(--decr)


console.log(5%2);

console.log(2*4 === '8');

//$$ и
//|| или


const isChecked = true,
    isClose = false;

    console.log(isChecked ||  !isClose);
    */
   /*
   let numberOfFilms = prompt('Сколько фильмов вы смотрели?','0');

   const personalMovieDB = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: true   
   };

   console.log(personalMovieDB.count);
/*
let whatFilm = prompt('Последний из просмотренных фильмов','Чужие');
let numberFilm = prompt('На сколько вы его оцениваете?','5');
/*personalMovieDB.movies = {
    whatFilm: numberFilm
};
personalMovieDB.movies.whatFilm = numberFilm;

*/
/*
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
//console.log(personalMovieDB.movies);
//console.log(whatFilm);

*/ /*
if (4 == 9){
    console.log('ok!')
}else {
    console.log('pidar');
}

const num = 50;
if (num < 49){
    console.log ('Error');
} else if (num > 100){
    console.log('Много');
}else {
    console.log('ТО что надо');
}
*/
/*
const num = 50;
(num === 50) ? console.log('ТО что надо') : console.log('Error');
*/
/*
const num = 100;
switch (num) {
case 49:console.log('49');
break;
case 50:console.log('50');
break;
default:console.log('Бляяя');
break;
}
*/
//let num = 50;
/*
while (num <= 55) {
    console.log(num);
    num++;
}
*/
/*
do {
    console.log(num);
    num++;
}
while (num <55);
*/
/*
for (let i = 1;  i < 10; i++) {
    
    if (i === 6){
        //break;
        continue;
    }
    console.log(i);
}
*/
/* мое решение
let numberOfFilms;
while (1){
numberOfFilms = +prompt('Сколько фильмов вы смотрели?',''); 
if (numberOfFilms === null){
numberOfFilms = 0;
}
if (numberOfFilms > 0){
break;
}
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true   
};

if (personalMovieDB.count < 10){
alert("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count < 30){
alert("Вы классический зритель");
}else {
alert("Вы киноман");
}   

let a, b;

while (1){
a = prompt('Один из последних просмотренных фильмов?', '');
if (a === null){
a = "";
}
if ((a.length > 0)&&(a.length < 50)){ 
b = +prompt('На сколько оцените его?', '');
if (b === null){
b = 0;
}
if (b > 0){
personalMovieDB.movies[a] = b;
break;
}
}
}
console.log( personalMovieDB.movies);

*/
/*
const a = prompt('Один из последних просмотренных фильмов?', ''),
   b = prompt('На сколько оцените его?', ''),
   c = prompt('Один из последних просмотренных фильмов?', ''),
   d = prompt('На сколько оцените его?', '');
*/
/*personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
*/
/*
let numberOfFilms = prompt('Сколько фильмов вы смотрели?','');

   const personalMovieDB = {
       count: numberOfFilms,
       movies: {},
       actors: {},
       genres: [],
       privat: true   
   };

console.log(personalMovieDB.count);






for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
if (a != null && b != null && a != "" && b != "" && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('date');
}else{
    console.log("error")
    i--;
}
          
}

console.log(personalMovieDB);
*/
//функции
/*
let num = 20;

function showFirstMassege(text){ //function declaration. может быть выполнена до ее обЪявления
    console.log(text);
     let num = 10;
     console.log(num);
}

showFirstMassege("Hello world!");
console.log(num);

function calk (a, b){
    return (a+b);

}
console.log(calk(4,3));

function ret(){
    let num = 50;
    return num;
}
const anothetNum = ret();

console.log(anothetNum);

const logger = function(){  //function expression. выполняется только после объявления
console.log("Hello")
};
logger();

const calkul = (a, b) => a + b; // стрелочные функции
// методы и свойства
const str = "test";

console.log(str.length);
console.log(str[2]);

const arr = [1,2,3];

console.log(arr.length);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

const fruit = "123Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6,11));

console.log(logg.substring(6,11));

console.log(logg.substr(6,5));

const numm = 12.2;

console.log(Math.round(numm));

const testy = "12.2px";
console.log(parseInt(testy));
console.log(parseFloat(testy));
*/
/*
let numberOfFilms = prompt('Сколько фильмов вы смотрели?','0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false   
};

function showMyDB (){
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }else {
        console.log("!!!!!!!");
    }
}
showMyDB();

const writeYourGenres = function  () {
    for (let cnt = 0; cnt < 3; cnt++){
    personalMovieDB.genres[cnt] = prompt(`ваш любимый жанр под номером ${cnt + 1}`);
    }
};
writeYourGenres();
console.log(personalMovieDB);
*/
/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы смотрели?',''); 
    while (numberOfFilms == "" || numberOfFilms == null ||isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы смотрели?',''); 
    } 
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true   
};

console.log(personalMovieDB.count);

const a = prompt('Один из последних просмотренных фильмов?', ''),
   b = prompt('На сколько оцените его?', ''),
   c = prompt('Один из последних просмотренных фильмов?', ''),
   d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
*/

/*
let numberOfFilms;



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false   
};

function start(argum1) {
    argum1.count = +prompt('Сколько фильмов вы смотрели?',''); 
    while (argum1.count == "" || argum1.count == null ||isNaN(argum1.count)){
        argum1 = +prompt('Сколько фильмов вы смотрели?',''); 
    } 
}

const arrow = argum => {
    for (let cnt = 0; cnt < 3; cnt++){
        argum[cnt] = prompt(`ваш любимый жанр под номером ${cnt + 1}`);
        }
};

start(personalMovieDB);
arrow(personalMovieDB.genres);

console.log(personalMovieDB);
*/
// функции обратного вызова
/*
function first() {
    // do somthing
    setTimeout(function(){
        console.log(1);
    }, 500);
    }
function second (){
    console.log(2);
}

first();
second(); */
/*
function learnJS(lang, callback){
    console.log(`я учу: ${lang}`);
    callback();
}


function done() {
    console.log("я прошел этот урок"); 
}
learnJS('javaScript', function(){
    console.log("я прошел этот урок");
});


learnJS('javaScript', done);
*/
/*
let image = function first() {
    // do somthing
    setTimeout(function(){
        console.log(1);
       return 2;
    }, 500);
    }


function second (image){
    console.log(image);
}

image();
second(image());*/
/*
function runFirstFunch(oneFunction, callbackFunction){
    oneFunction();
    callbackFunction();
}

runFirstFunch(first, second);
*/
/////object

// const options ={
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();// создали собственный метод

// const {border, bg} = options.colors; //деструктуризация объекта

// console.log(border, bg);


//console.log(options.colors.border);

//console.log(options["colors"]["border"]); //достучаться к значению свойства

//delete options.name;

//console.log(options);
/*
let counter = 0;

for (let key in options){ // способ перебора объекта for in

if (typeof(options[key]) === "object"){

for (let i in options[key]){

console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

counter++;

}

} else {
    
    console.log(`Свойство ${key} имеет значение ${options[key]}`);

    counter++;
}
}

console.log(counter);

*/

//console.log(Object.keys(options)); // получение свойств объекта в массив

//console.log(Object.keys(options).length);// определение количества ключей
//массивы и псевдомассивы

// const arr = [13, 12, 33, 64, 78];

// arr.sort(compareNum);

// console.log(arr);

// function compareNum (a, b){
//     return a - b;
// }

// arr.pop(); // удаляет последний элемент

// console.log(arr);

// arr.push(10); // добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){ // цикл перебирающий только массивы, строки и псевдомассивы
//     console.log(value); //с объектами не работает
// }

// arr[99] = 1;

// console.log(arr.length);

// let one = arr.map((i, key) => `элемент ${i} с инедксом ${key}`); // переберает массив, принимает элемент массива и его индекс

// console.log(one);

// arr.forEach(function(item, i, arr){// цикл перебора массива
//     console.log(`${i}: ${item} внутри масиива ${arr}`);//принимает в себя колбэк функцию
// });//функция принимает три аргумета: элемент массива, индекс эл, массив на который ссылаемся

// const str = prompt('','');
// const products = str.split(", "); //метод записывает строку разделенную в 
// console.log(products); // знаками в скобках в массив
// products.sort(); // сортирует элементы массива в алфавитном порядке, либо же цифры в порядке возрастания
// console.log(products.join("; ")); //делает из массива строку разделенную знаками в скобках

// let a = 5,
//     b = a;

//     b = b + 5;

//     console.log(b, a);

    // const obj = {
    //     a: 5,
    //     b: 1
    // };

    // const copy = obj; // передан не объект а ссылка на него

    // copy.a = 10;
    
    // console.log(copy);

    // console.log(obj);

    // function copy (mainObj){
    //     let objCopy={};
    //     let key;
    //     for(key in mainObj){
    //         objCopy[key] = mainObj[key];
    //     }
    //     return objCopy;
    // }

    // const numbers = {
    //     a:2,
    //     b:5,
    //     c:{
    //         x:7,
    //         y:4
    //     }
        
    // };

    // const newNumbers = copy(numbers);

    // newNumbers.a = 10;
    // newNumbers.c.x = 10; // поверхностная копия объектов

    // console.log(newNumbers);

    // console.log(numbers);

//     const add = {
//         d:17,
//         e:20
//     };

//    // console.log(Object.assign(numbers, add)); // метод добавляет второй объект в первый

//     const newObject = (Object.assign({}, add));//копирует второй объект в пустой новый

//     console.log(newObject);
    
// newObject.d = 25;

// console.log(newObject);

// console.log(add);

// const oldArr = ['a', 'b', 'c'];

// const newArr = oldArr.slice(); // метод копирования массивов

// newArr[1] = 'fucking';

// console.log(newArr);

// console.log(oldArr);

//оператор раcпростанения (spread) 

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);
// internet[0] = 'her';
// console.log(internet);
// console.log(video);

// function log (a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 3, 5];

// log(...num);
// в ES8 стандарте SPREAD оператор (...) работает и для объектов

// const array = ['a', 'b'];

// const newArray = [...array]; // создание копии объекта с помощью SPREAD оператора

// console.log(newArray);

// const q = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const qNew = {...q}; // копируем объект
// console.log(qNew);
// qNew.a = 10;
// console.log(q);
// console.log(qNew);
// ООП объектно-ориентированное программирование
let str = "some";

let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

