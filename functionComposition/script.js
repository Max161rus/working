'use strict';

const multiply20 = (price) => price * 20; // 4000

const divide100 = (price) => price / 100; // 2

const normilizePrice = (price) => price.toFixed(2);

const discount = normilizePrice(divide100(multiply20(200)));

console.log(discount);


const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));
