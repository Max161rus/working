'use strict';


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
//         console.log(this); // данная контекст уже не будет ссылаться на сам объект, так как она находится в методе
//     }                      //а вот еслибы контекст был в методе то он ссылался бы на объект
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

// console.log(double(3)); //double это новая функция в которой задан контекст
//равный числу 2
//то есть с помощью bind мы задали контекст функции count и записали ее
//в новую функцию double


//этот метод создает НОВУЮ функцию связанную с определенным контекстом


//1) Обычная функция this = window, но если use strict, то this = undifined
//2) Контекст у методов обЪекта - будет сам обЪект
//3) this в конструкторах и классах - это новый экземпляр обЪектов
//4) ручная привязка this: методы call, apply, bind

// const btn = document.querySelectorAll('button');

// btn[0].addEventListener('click', function(){
// console.log(this); //если колбэк функцией является function declaration
// this.style.backgroundColor = "red";
// });//то контекстом вызова в обработчике события будет сам элемент
// //т.е в данном случае this = event.target

// btn[1].addEventListener('click', (event)=>{
// console.log(this);
// console.log(event.target);
// const ev = event.target;
// ev.style.backgroundColor = 'yellow';
// });

// //а у стрелочной функции нет своего контекста вызова!!!
// //она всегда его будет брать у своего родителя!!!

const obj = {
    num: 5,
    sayNamber: function(){
        const say = () => {
            console.log(this); //контекст вызова ссылается на объект
            console.log(this.num);
        };
        say();
    }
};

obj.sayNamber(); // контекст задан в стрелочной функции
//родителем которой является обычная функция, а она в свою очередь
//является методом объекта и ее контекст ссылался бы на объект
//а контекст стрелочной функции ссылается на родителя
//и так как она находится в методе объекта, то она тоже 
//сошлется на сам объект

// const double = a =>  a * 2;

// console.log(double(4));


// btn[1].addEventListener('click', (e) => {
// console.log(this); // если используем стрелочную функцию то контекст вызова теряется
// e.target.style.backgroundColor = 'yellow';
// }); //без use strict будет обращаться к window