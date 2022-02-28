'use strict';
//классы

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return this.height * this.width;
    }
}

class ColoredReactangleWithText extends Rectangle { //extends наследование свойств родительского класса
    constructor(height, width, text, bgColor){
        super(height, width); //свойства родительского класса
        this.text = text;
        this.bgColor = bgColor;

    }
    showMyProps(){
        console.log(`Тест: ${this.text}, цвет: ${this.bgColor}`);
    }
}

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

const div = new ColoredReactangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();

console.log(div.calcArea());