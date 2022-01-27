
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

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
//console.log(personalMovieDB.movies);
//console.log(whatFilm);

