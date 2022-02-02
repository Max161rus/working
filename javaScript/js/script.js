
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
        console.log("Херня");
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