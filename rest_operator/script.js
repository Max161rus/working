'use strict';


//rest оператор (оператор оставшихся элементов)

const log = function(a, b, ...rest) { // оператор Rest записывается всегда последним
    console.log(a, b, rest);          //имя после трех точек может быть любое
};                                    //все аргументы оператора rest помещаются в массим

log('basic', 'rest', 'operator', 'usege');

//параметры по умолчанию, появились в стандарте ES6

function calcOrDouble(number = 2, basis = 2){ 
   // basis = basis || 2; //так поступали в стандарте ES5
    console.log(number * basis);
}

calcOrDouble(3, 5);