// // получаем доступ к холсту
// const canvas = document.getElementById('game');
// const context = canvas.getContext('2d');
// // размер квадратика
// const grid = 32;
// // массив с последовательностями фигур, на старте — пустой
// var tetrominoSequence = [];

// // с помощью двумерного массива следим за тем, что находится в каждой клетке игрового поля
// // размер поля — 10 на 20, и несколько строк ещё находится за видимой областью
// var playfield = [];

// // заполняем сразу массив пустыми ячейками
// for (let row = -2; row < 20; row++) {
//   playfield[row] = [];

//   for (let col = 0; col < 10; col++) {
//     playfield[row][col] = 0;
//   }
// }

// // задаём формы для каждой фигуры
// const tetrominos = {
//   'I': [
//     [0,0,0,0],
//     [1,1,1,1],
//     [0,0,0,0],
//     [0,0,0,0]
//   ],
//   'J': [
//     [1,0,0],
//     [1,1,1],
//     [0,0,0],
//   ],
//   'L': [
//     [0,0,1],
//     [1,1,1],
//     [0,0,0],
//   ],
//   'O': [
//     [1,1],
//     [1,1],
//   ],
//   'S': [
//     [0,1,1],
//     [1,1,0],
//     [0,0,0],
//   ],
//   'Z': [
//     [1,1,0],
//     [0,1,1],
//     [0,0,0],
//   ],
//   'T': [
//     [0,1,0],
//     [1,1,1],
//     [0,0,0],
//   ]
// };

// // цвет каждой фигуры
// const colors = {
//   'I': 'cyan',
//   'O': 'yellow',
//   'T': 'purple',
//   'S': 'green',
//   'Z': 'red',
//   'J': 'blue',
//   'L': 'orange'
// };

// // счётчик
// let count = 0;
// // текущая фигура в игре
// let tetromino = getNextTetromino();

// console.log(tetromino)
// // следим за кадрами анимации, чтобы если что — остановить игру
// let rAF = null;  
// // флаг конца игры, на старте — неактивный
// let gameOver = false;

// // Функция возвращает случайное число в заданном диапазоне
// // https://stackoverflow.com/a/1527820/2124254
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // создаём последовательность фигур, которая появится в игре
// function generateSequence() {
//   // тут — сами фигуры
//   const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

//   while (sequence.length) {
//     // случайным образом находим любую из них
//     const rand = getRandomInt(0, sequence.length - 1);
//     const name = sequence.splice(rand, 1)[0];
//     // помещаем выбранную фигуру в игровой массив с последовательностями
//     tetrominoSequence.push(name);
//   }
// console.log(tetrominoSequence);

// }

// // получаем следующую фигуру
// function getNextTetromino() {
//   // если следующей нет — генерируем
//   if (tetrominoSequence.length === 0) {
//     generateSequence();
//   }
//   // берём первую фигуру из массива
//   // 
  
//   const name = 'I';

//   // сразу создаём матрицу, с которой мы отрисуем фигуру
//   const matrix = tetrominos[name];

//   console.log(matrix);
//   // I и O стартуют с середины, остальные — чуть левее
//   const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

//   console.log(col);
//   // I начинает с 21 строки (смещение -1), а все остальные — со строки 22 (смещение -2)
//   const row = name === 'I' ? -1 : -2;

//   // вот что возвращает функция 
//   return {
//     name: name,      // название фигуры (L, O, и т.д.)
//     matrix: matrix,  // матрица с фигурой
//     row: row,        // текущая строка (фигуры стартуют за видимой областью холста)
//     col: col         // текущий столбец
//   };
// }

// function rotate(matrix) {
//   const N = matrix.length - 1;
//   const result = matrix.map((row, i) =>
//     row.map((val, j) => matrix[N - j][i])
//   );
//   // на входе матрица, и на выходе тоже отдаём матрицу
//   return result;
// }

// let newRes = rotate(tetromino.matrix);

// console.log(newRes)

// newRes = rotate(newRes);

// console.log(newRes)

const obj = {
  a: 0,
  b: 1,
  c: {
    e: 3,
    f: [1, 'h', {
      y: 7
    }]
  }
};

const outObj = obj => {
  const newObj = {};
  for (let key in obj){
    if(typeof(obj[key]) !== 'object'){
      newObj[key] = obj[key];
    } else {
      newObj[key] = outObj(obj[key]);
    }
  }
  return newObj;
}

console.log(outObj(obj));