// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	const numMatrix = [];
	const directions = ['r', 'd', 'l', 'u']; //right, down, left, up

	let current = 0;

	let number = 1;
	for (let i = 1; i <= n; i++) {
		numMatrix[i] = [];
		for (let j = 1; j <= n; j++) {
			if (directions[current] === 'r') {
				numMatrix[i].push(number);
			}
			number++;
		}
	}

	// for (let i = 1; i <= n; i++) {
	// 	numMatrix[i] = [];
	// 	for (let j = 1; j <= n; i++) {
	// 		if (directions[current] === 'r') {
	// 			if (!numMatrix[i]) numMatrix[i] = [];
	// 			numMatrix[i].push(number);
	// 		}
	// 		if (directions[current] === 'd') {
	// 			for (const row of numMatrix) {
	// 				matrix[i][j] //if a number exists, just add the new one before
	// 					? matrix[i][j].splice(j - 1, number, 0)
	// 					: row.unshift(number);
	// 			}
	// 		}
	// 		if (directions[current] === 'l') {
	// 			if (!numMatrix[numMatrix.length - j]) {
	// 				numMatrix[numMatrix.length - j] = [];
	// 			}

	// 			numMatrix[numMatrix.length - j].unshift(number);
	// 		}
	// 		if (directions[current] === 'up') {
	// 			for (const row of numMatrix) {
	// 				matrix[i][j] //if a number exists, just add the new one before
	// 					? matrix[i][j].splice(j - 1, number, 0)
	// 					: row.unshift(number);
	// 			}
	// 		}

	// 		number++;
	// 	}

	// 	current = directions[current + 1] ? [current + 1] : 0;
	// }

	return numMatrix.filter((row) => !!row);
}

module.exports = matrix;

const matrix2 = (n) => {
	const numbers = Array.from({ length: n ** 2 }, (_, i) => i + 1);
	const numMatrix = [];
	let current = 0;
	let number = 1;
	for (let i = 1; i <= n; i++) {
		numMatrix.push([].fill(null));
	}
	const directions = ['r', 'd', 'l', 'u']; //right, down, left, up
	for (let i = 0; i < n; i + n) {
		console.log(i);
		if (directions[current] === 'l') {
			const emptyIndex = numMatrix[i].findIndex((row) => !!row);

			if (emptyIndex === -1) {
				numMatrix[i].push(numbers.slice(i, i + n));
			} else {
				const presentNums = numMatrix[i].filter((n) => !!n);
				numMatrix[i].unshift(numbers.slice(i, i + n - presentNums.length));
			}
		}

		if (directions[current] === 'd') {
			for (let j = 0; j < numMatrix.length; j++) {
				const row = numMatrix[j];

				// Get the last filled item
				if (!row[row.length - i]) {
					row[row.length - i] = numbers[i];
				}
			}
		}

		if (directions[current] === 'r') {
			const emptyIndex = numMatrix[i].findIndex((row) => !!row);

			if (emptyIndex === -1) {
				numMatrix[i].push(numbers.slice(i, i + n));
			} else {
				const presentNums = numMatrix[i].filter((n) => !!n);
				numMatrix[i].unshift(numbers.slice(i, i + n - presentNums.length));
			}
		}

		if (directions[current] === 'u') {
			for (let j = 0; j < numMatrix.length; j++) {
				const row = numMatrix[j];

				// Get the last filled item
				if (!row[i]) {
					row[i] = numbers[i];
				}
			}
		}

		current = directions[current + 1] ? [current + 1] : 0;
	}

	return numMatrix;
};

const matrix3 = (n) => {
	let numMatrix = Array.from({ length: n }, (_, i) => []);
	let startColumn = 0;
	let startRow = 0;

	let endColumn = n - 1;
	let endRow = n - 1;
	let counter = 0;

	while (startRow <= endRow && startColum <= endColumn) {
		// left start
		for (let i = startColumn; i <= endColumn; i++) {
			numMatrix[startRow][i] = counter;
			counter++;
		}
		startRow++;

		// right start
		for (let i = startRow; i <= endRow; i++) {
			numMatrix[i][endColumn] = counter;
			counter++;
		}
		endColumn--;

		// bottom start
		for (let i = endColumn; i >= startColumn; i--) {
			numMatrix[endRow][i] = counter;
			counter++;
		}

		endRow--;
		// top start
		for (let i = endRow; i >= startRow; i--) {
			numMatrix[i][startColumn] = counter;
			counter++;
		}

		startColumn++;
	}

	return numMatrix;
};
