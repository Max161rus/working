'use strict';

// new RegExp('pattern', 'flags');

// /patern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;

// console.log(ans.match(reg));

const str = "My name is R2D2";

console.log(str.match(/\W/ig));

console.log(str.match(/\D/ig));

//обратные классы
// \D // не цифры
// \W // не буквы

//классы
// \d
// \w
// \s

//флаги
//i
//g
//m

//console.log(ans.search(reg));
//console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

//console.log('12-34-56'.replace(/-/g, ':'));

