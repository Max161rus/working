'use strict';

//const app = '123';

//создание модуля с помощью анонимной самовызывающейся функции

const number = 1;

(function(){
    let number = 2;
    console.log(number);
    console.log(number + 3);
}()); // - анонимная самовызывающаяся функция


console.log(number);


//создание модуля с помощью объектного интерфейса

const user = (function(){
    const privat = function (){
        console.log('I am private');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();