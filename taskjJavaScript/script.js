// //task number one

// function multiplication(arg1, arg2) {
//     return arg1 * arg2;
// };

// let result = multiplication(2, 4);

// console.log(result);

// function str(firstName, lastName, age) {
//     let weight = '';
//     const str = String(age);

//     if (age > 109) {
//         return 'Столько не живут'
//     } else if (age > 10 && age < 20) {
//         weight = 'лет';
//     } else {
//         if (Number(str[str.length - 1]) === 0) {
//             weight = 'лет';
//         } else if (Number(str[str.length - 1]) === 1) {
//             weight = 'год';
//         } else if (Number(str[str.length - 1]) < 5) {
//             weight = 'года';
//         } else if (Number(str[str.length - 1]) <= 9) {
//             weight = 'лет';
//         }
//     }

//     if (typeof (firstName) !== 'string' || typeof (lastName) !== 'string' || typeof (age) !== 'number') {
//         return 'Введите верные типы данных'
//     } else {
//         return `Привет ${firstName} ${lastName} с возрастом ${age} ${weight}`
//     }

// }

// result = str('Maxim', "Oligov", 98);

// console.log(result);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let i = 0;

// for (key in salaries) {
//     if (typeof (salaries[key]) === 'number') {
//         i = i + salaries[key];
//     }
// };

// console.log(i);

// function multiplyNumeric(obj) {
//     for (key in obj){
//         obj[key] = obj[key] * 2;
//     }
// };

// multiplyNumeric(salaries);

// console.log(salaries);

const obj = {
    a: 0,
    b: 1,
    c: 2,
    d: {
        e: 3,
        f: [5, 6, { g: 7 }]
    },
    h: 'true'
};

const one = {
    a: 0,
    b: 1,
    c: {
        d: 2
    },
    e: 3
}

function enumeration(obj) {
    let newObj = {};
    if (Array.isArray(obj)) {
        newObj = [];
    }

    for (key in obj) {
        if (typeof (obj[key]) !== 'object') {
            newObj[key] = obj[key];
        } else {
            newObj[key] = enumeration(obj[key]);
        }
    }
    return newObj;
}

const oneOut = enumeration(obj);



console.log(oneOut);

const arr = [1, 100, 3, 17, 25, 44, 56, 118, 64];
let a = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
        a = arr[i];
    }
}

console.log(a);

const newArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]];

let count = 0;

const outArr = [];

function transforArray(array) {
    array.map((item) => {
        if(Array.isArray(item)){
            transforArray(item);
        } else {
            outArr[count] = item;
            count++;
        }
    });
}

transforArray (newArr);

console.log(outArr)