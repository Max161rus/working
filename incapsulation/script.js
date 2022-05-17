'use strict';

//инкапсуляция - один из принципов ООП - 
//сокрытие внутренностей программы(переменных и т.д) от внешнего мира


//пример на функция конструкторах

// function User(name, age){
//     this.name = name;
//     let userAge = age;

//     this.say = function(){
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age){
//         if(typeof(age) === "number" && age > 0 && age < 110){
//             userAge = age;
//         } else {
//             console.log("Недопустимое значение");
//         }
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());
// ivan.name = "Alex";

// ivan.say();



//пример на классах

class User{

    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    
    #sername = "Petrychenko";

    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.#sername}, возраст: ${this._age}`);
    }


    get age(){
        return this._age;
    }

    set age(age){
        if(typeof(age) === "number" && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}

const ivan = new User('Ivan', 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);
console.log(ivan.sername);
ivan.say();



class Max {

    constructor (sername, age){
        this.sername = sername;
        this.age = age;
    }

    #wife = "Elena";

    onPublic = () => {
        console.log(this.sername, this.age, this.#wife);
    }

    get maxWife (){
         return this.#wife;
    }
    
    setWife (wife){
        this.#wife = wife;
    }

}

const max = new Max ("Олигов", 34);

//console.log(max.wife);

// max.onPublic();
 console.log(max.maxWife);
 max.setWife('Marina');
 console.log(max.maxWife);

