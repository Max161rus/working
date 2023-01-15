
//const btn = document.querySelector('.btn');

//const body = document.querySelector('body');

const wrapper = document.querySelector('.wrapper');

const humanField = document.querySelector('.wrapper__human-field');

const computerField = document.querySelector('.wrapper__computer-field');

const over = document.querySelector('.over');

const matrixHumanField = [];

const matrixComputerField = [];

let lastShot = [];

let align = false;

const gameOverRed = (arr, matrix) => {
	let col = 0;
	let row = 0;
	arr.forEach(item => {
		if (matrix[row][col] === 1) {
			item.style.backgroundColor = 'black'
		} else if (matrix[row][col] === 2) {
			item.style.backgroundColor = 'yellow'
		} else {
			item.style.backgroundColor = 'red'
		}
		if (col < 9) {
			col++
		} else {
			col = 0;
			row++;
		}
	});
}

const randomPlacementShips = matrix => { // рандомное появление кораблей
	let x = -1;
	let y = -1;
	let count = 0;

	while (count < 15) {
		x = -1;
		y = -1;

		while (x < 0 || x > 9) {
			x = Math.floor((Math.random() * 10))
		}

		while (y < 0 || y > 9) {
			y = Math.floor((Math.random() * 10))
		}

		if (matrix[y - 1] !== undefined && matrix[y + 1] !== undefined) {
			if (matrix[y][x] !== 1 && matrix[y][x - 1] !== 1 && matrix[y][x + 1] !== 1 && matrix[y - 1][x] !== 1 && matrix[y + 1][x] !== 1 && matrix[y - 1][x - 1] !== 1 && matrix[y - 1][x + 1] !== 1 && matrix[y + 1][x - 1] !== 1 && matrix[y + 1][x + 1] !== 1) {
				matrix[y][x] = 1;
				count++;
			}
		}
		if (matrix[y - 1] === undefined) {
			if (matrix[y][x] !== 1 && matrix[y][x - 1] !== 1 && matrix[y][x + 1] !== 1 && matrix[y + 1][x] !== 1 && matrix[y + 1][x - 1] !== 1 && matrix[y + 1][x + 1] !== 1) {
				matrix[y][x] = 1;
				count++;
			}
		}
		if (matrix[y + 1] === undefined) {
			if (matrix[y][x] !== 1 && matrix[y][x - 1] !== 1 && matrix[y][x + 1] !== 1 && matrix[y - 1][x] !== 1 && matrix[y - 1][x - 1] !== 1 && matrix[y - 1][x + 1] !== 1) {
				matrix[y][x] = 1;
				count++;
			}
		}


	}
}

const drawField = (field, className) => { // создаем поля человека и компа

	for (let i = 0; i < 100; i++) {
		const elField = document.createElement('div');
		elField.classList.add(className);
		field.appendChild(elField);
	}

}

drawField(humanField, 'wrapper__human-el');

drawField(computerField, 'wrapper__computer-el');

const arrHumanFieldElement = document.querySelectorAll('.wrapper__human-el');

const arrComputerFieldElement = document.querySelectorAll('.wrapper__computer-el');

const matrixWrite = matrix => { // создаем матрицы полей

	for (let j = 0; j < 10; j++) {
		matrix[j] = [];
		for (let i = 0; i < 10; i++) {
			matrix[j][i] = 0;
		}
	}
}

matrixWrite(matrixHumanField);

matrixWrite(matrixComputerField);

randomPlacementShips(matrixHumanField);

randomPlacementShips(matrixComputerField);


const drawElementsOnHumanField = (matrix, arr) => { // рисуем корабли на поле человека
	let col = 0;
	let row = 0;

	arr.forEach((item, index) => {
		if (matrix[row][col] === 1) {
			arr[index].classList.add('show');
		}
		if (matrix[row][col] === 2) {
			setTimeout(() => {
				arr[index].classList.add('fire');
			}, 1000)
		}
		if (matrix[row][col] === 3) {
			setTimeout(() => {
				arr[index].innerHTML = `<div class='dot'></div`;
			}, 1000)
		}
		if (matrix[row][col] === 4) {
			setTimeout(() => {
				arr[index].innerHTML = `<div class='dot dotYellow'></div`;
			}, 1000)
			matrix[row][col] = 3
		}

		if (col < 9) {
			col++
		} else {
			col = 0;
			row++;
		}
	});

}

drawElementsOnHumanField(matrixHumanField, arrHumanFieldElement);

const gameOver = (matrix) => { // выволит сообщение о конце игры
	let counter = 0;
	matrix.forEach(item => {
		item.forEach(item => {
			if (item === 2) {
				counter++;
			}
		});
	});
	if (counter === 15) {
		over.innerText = `GAME OVER`;
		return true;
	}
}

let flagShot = false;

const randomShot = matrix1 => {

	flagShot = false;
	let x = -1;
	let y = -1;


	while (x < 0 || x > 9) {
		x = Math.floor((Math.random() * 10))
	}

	while (y < 0 || y > 9) {
		y = Math.floor((Math.random() * 10))
	}

	if (matrix1[y][x] === 3 || matrix1[y][x] === 2) {
		if (!align) {
			x = 0;
			y = 0;
		} else {
			x = 9;
			y = 9;
		}

		while (matrix1[y][x] === 2 || matrix1[y][x] === 3) { //matrix1[y][x] !== 0 && matrix1[y][x] !== 1
			if (!align) {
				if (y < 9) {
					y++;
				} else {
					y = 0;
					x++;
				}
			}
			if (align) {
				if (y > 0) {
					y--;
				} else {
					y = 9;
					x--;
				}
			}
		}
	}

	if (matrix1[y][x] === 1) {
		matrix1[y][x] = 2;
		if (matrix1[y][x + 1] !== undefined) {
			matrix1[y][x + 1] = 3;
		}
		if (matrix1[y][x - 1] !== undefined) {
			matrix1[y][x - 1] = 3;
		}
		if (matrix1[y - 1] !== undefined) {
			if (matrix1[y - 1][x - 1] !== undefined) {
				matrix1[y - 1][x - 1] = 3;
			}
			matrix1[y - 1][x] = 3;
			if (matrix1[y - 1][x + 1] !== undefined) {
				matrix1[y - 1][x + 1] = 3;
			}
		}
		if (matrix1[y + 1] !== undefined) {
			if (matrix1[y + 1][x - 1] !== undefined) {
				matrix1[y + 1][x - 1] = 3;
			}
			matrix1[y + 1][x] = 3;
			if (matrix1[y + 1][x + 1] !== undefined) {
				matrix1[y + 1][x + 1] = 3;
			}
		}
		flagShot = true;
	}
	if (matrix1[y][x] === 0) {
		matrix1[y][x] = 4;
		align = !align // меняем направление рандома
	}
	if (flagShot) {
		setTimeout(() => {
			if (!gameOver(matrix1)) {
				randomShot(matrix1);
			}
			drawElementsOnHumanField(matrix1, arrHumanFieldElement);

			if (gameOver(matrix1)) {
				gameOverRed(arrHumanFieldElement, matrixHumanField);
				gameOverRed(arrComputerFieldElement, matrixComputerField);
				return
			}
		}, 1000)
	}
}

const drawDotInElement = (arrElement, matrix, matrix1) => { // отрисовывает точки и кресты на поле

	let row = 0;
	let col = 0;

	arrElement.forEach(item => {

		const shot = document.createElement('div');

		const y = col;

		const x = row;

		let flag1 = false;

		let flag2 = false;

		if (matrix[row][col] === 1) {
			shot.classList.add('cross');
			shot.innerText = 'X';
		} else {
			shot.classList.add('dot');
		}

		if (col < 9) {
			col++
		} else {
			col = 0;
			row++;
		}

		item.addEventListener('click', e => {

			if (!gameOver(matrix, 'Computer') && !gameOver(matrix1, 'Human')) {
				if (e.target.childNodes.length === 0 && e.target.className !== 'dot') {
					e.target.appendChild(shot);

					if (matrix[x][y] === 1) {
						matrix[x][y] = 2;
					}

					if (matrix[x][y] === 0) {
						randomShot(matrix1)
						drawElementsOnHumanField(matrix1, arrHumanFieldElement);
					}

					flag1 = gameOver(matrix);
					flag2 = gameOver(matrix1);

					if (flag1 || flag2) {
						gameOverRed(arrHumanFieldElement, matrixHumanField);
						gameOverRed(arrComputerFieldElement, matrixComputerField);
					}

				}
			}

		})

	});
}

drawDotInElement(arrComputerFieldElement, matrixComputerField, matrixHumanField);



