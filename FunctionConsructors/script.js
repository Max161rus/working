'use strict';
/////функции конструкторы


// const num = new Number(3);
// console.log(num);

// const num = new Function (3);
// console.log(num);

// function User (name, id){ //функция конструктор
//     this.name = name; //с ее помощью можем создавать новых пользователей
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function(){
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();
// ivan.exit();

// в джава скрипте изначально классов небыло
//они появились потом в качестве синтаксического сахара

//контекст вызова функции This

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
//     }

// showThis(4, 5);

// const obj ={
//     a: 20,
//     b: 15,
//     sum: function(){
//         function shout () {
//         console.log(this);
//     }
//     shout();
// }
// };

// obj.sum();

// function User (name, id){ //функция конструктор
//          this.name = name; //с ее помощью можем создавать новых пользователей
//          this.id = id;
//          this.human = true;
//          this.hello = function(){
//                      console.log(`Hello ${this.name}`);
//                  };
//          }

// let ivan = new User('Ivan', 23);

// console.log(ivan);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');//усановили контекст функции
// sayName.apply(user, ['Smith']); //усановили контекст функции
// //оба метода выше выполняют одно и тоже но имеют разный синтаксис
// //Это было два варианта методов ручного присвоения контекстов
// //есть еще и третий

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));

//этот метод создает НОВУЮ функцию связанную с определенным контекстом


//1) Обычная функция this = window, но если use strict, то this = undifined
//2) Контекст у методов обЪекта - будет сам обЪект
//3) this в конструкторах и классах - это новый экземпляр обЪектов
//4) ручная привязка this: методы call, apply, bind

const btn = document.querySelectorAll('button');

btn[0].addEventListener('click', function(){
console.log(this); //если колбэк функцией является function declaration
this.style.backgroundColor = "red";
});//то контекстом вызова в обработчике события будет сам элемент
//т.е в данном случае this = event.target

//а у стрелочной функции нет своего контекста вызова!!!
//она всегда его будет брать у своего родителя!!!

const obj = {
    num: 5,
    sayNamber: function(){
        const say = () => {
            console.log(this); //контекст вызова ссылается на объект
        };
        say();
    }
};

obj.sayNamber();

const double = a =>  a * 2;

console.log(double(4));


btn[1].addEventListener('click', (e) => {
console.log(this); // если используем стрелочную функцию то контекст вызова теряется
e.target.style.backgroundColor = 'yellow';
}); //без use strict будет обращаться к window