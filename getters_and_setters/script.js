'use strict';

//свойства объектов деляться на две категории:
//1. свойства данные - обычные свойства объектов
//2. свойства акцессоры (getters and setters)

const persone = {
    name : 'Alex',
    age: 25,

    get userAge(){
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge = 30);
console.log(persone.userAge);
console.log(persone);


