'use strict';
//классы

class Rectangle { //всегда начинается с большой буквы
    constructor(height, width){ //создание  экземпляра класса
        this.height = height;
        this.width = width;
    }
    calcArea(){ //метод класса
        return this.height * this.width; //контекст вызова ссылается на новый
    }                                    //объект который будет создан
}

class ColoredReactangleWithText extends Rectangle { //extends наследование свойств родительского класса
    constructor(height, width, text, bgColor){
        super(height, width); //вызывает свойства родительского класса, эти свойства копировались автоматически
                              //с родительского класса, чтоб не делать ctrl+c/ctrl+v
                              //super должно быть всегда на первом месте в контсрукторе
                              //в super мы забиваем только те свойства, 
                              //которые хотим использовать от родительского класса
                              //метод calcArea() наследуется автоматически. 
                              //ПАМЯТКА: Точка (.) - dot.
                              
        this.text = text;
        this.bgColor = bgColor;

    }
    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}, высота: ${this.height}, ширина: ${this.width}`);
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square);

// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredReactangleWithText(25, 10, 'Hello world', 'red');

console.log(div);

div.showMyProps();

console.log(div.calcArea());

//ОСНОВНЫЕ ПРИНЦИПЫ ООП

//1) АБСТРАКЦИЯ - когда отделяем концепцию от ее экземпляра (класс - концепция),
//   созданный с помощью класса объект - экземпляр

//2) НАСЛЕДОВАНИЕ - способность нашего объекта или класса
// базироваться на другом объекте или классе