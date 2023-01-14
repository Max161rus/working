
const humanField = document.querySelector('.wrapper__human-field');

const computerField = document.querySelector('.wrapper__computer-field');

const matrixHumanField = [];

const matrixComputerField = [];

let lastShot = [];

const ower = document.querySelector('.ower');

let align = false;

const gameOwerRed = (arr, matrix) => {
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

matrixWrite(matrixHumanField)

matrixWrite(matrixComputerField)

randomPlacementShips(matrixHumanField)

randomPlacementShips(matrixComputerField)


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
			matrix[row][col] = 3
			setTimeout(() => {
				arr[index].innerHTML = `<div class='dot dotYellow'></div`;
				console.log(matrix)
			}, 1000)
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


const gameOver = matrix => { // выволит сообщение о конце игры
	let counter = 0;
	matrix.forEach(item => {
		item.forEach(item => {
			if (item === 2) {
				counter++;
			}
		});
	});
	if (counter === 15) {
		console.log('game over')
		ower.innerText = 'GAME OWER';
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

	if (matrix1[y][x] === 3) {
		if (!align) {
			x = 0;
			y = 0;
		} else {
			x = 9;
			y = 9;
		}

		console.log(align, [y, x])

		while (matrix1[y][x] !== 0 && matrix1[y][x] !== 1) {
			if (!align) {
				if (x < 9) {
					x++;
				} else {
					x = 0;
					y++;
				}
			}
			if (align) {
				if (x > 0) {
					x--;
				} else {
					x = 9;
					y--;
				}
			}
		}
	}

	if (matrix1[y][x] === 1) {
		matrix1[y][x] = 2;
		matrix1[y][x + 1] = 3;
		matrix1[y][x - 1] = 3;
		if (matrix1[y - 1] !== undefined) {
			matrix1[y - 1][x - 1] = 3;
			matrix1[y - 1][x] = 3;
			matrix1[y - 1][x + 1] = 3;
		}
		if (matrix1[y + 1] !== undefined) {
			matrix1[y + 1][x - 1] = 3;
			matrix1[y + 1][x] = 3;
			matrix1[y + 1][x + 1] = 3;
		}
		flagShot = true;
	}
	if (matrix1[y][x] === 0) {
		matrix1[y][x] = 4;
		align = !align // меняем направление рандома
	}
	if (flagShot) {
		setTimeout(() => {
			randomShot(matrix1)
			drawElementsOnHumanField(matrix1, arrHumanFieldElement);
		}, 1000)
	}
}

let count3 = 0

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

			if (e.target.childNodes.length === 0 && e.target.className !== 'dot') {
				e.target.appendChild(shot);

				if (matrix[x][y] === 1) {
					matrix[x][y] = 2;
				}

				if (matrix[x][y] === 0) {
					randomShot(matrix1)
					drawElementsOnHumanField(matrix1, arrHumanFieldElement);
				}

				flag1 = gameOver(matrix)
				flag2 = gameOver(matrix1)

				if (flag1 || flag2) {
					gameOwerRed(arrHumanFieldElement, matrixHumanField)
					gameOwerRed(arrComputerFieldElement, matrixComputerField)
				}

			}

		})

	});
}

drawDotInElement(arrComputerFieldElement, matrixComputerField, matrixHumanField);



