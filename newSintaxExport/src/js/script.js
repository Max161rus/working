
//import {one, two} from './main'; //был объект, мы его деструктуировали на две отдельные переменные one И two

//console.log(`${one} and ${two}`);

// import {one as first} from './main'; //переименовыем при импорте

// console.log(first);

// import * as data from './main'; //все импортируемые данны обозначаем как data

// console.log(`${data.one} and ${data.two}`);//далее к ним обращаемся
// data.sayHi();

import say from "./main.js"; //импорт по умолчанию
say();