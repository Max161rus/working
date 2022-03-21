'use strict';

// const persone = {
//     name: 'Alex',
//     tel: '+744444444'
// };

// console.log(JSON.stringify(persone)); // преобразование объекта в JSON

// console.log(JSON.parse(JSON.stringify(persone))); // обртаное преобразование в объект

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parent: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
//далее сделаем глубокую копию нашего объекта

const clone = JSON.parse(JSON.stringify(persone));

clone.parent.mom = 'Ann';

console.log(persone);

console.log(clone);
