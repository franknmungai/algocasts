// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   ' 1
//       '##  ' 2
//       '### ' 3
//       '####' 4

function steps(n) {
	for (let i = 0; i < n; i++) {
		let step = '';
		for (let j = 0; j < n; j++) {
			if (j <= i) {
				step += '#';
			} else step += ' ';
		}
		console.log(step);
	}
}

const printSteps = (n, rows = 0) => {
	if (rows === n) return;

	let steps = '';
	const printColumn = (col = 0) => {
		if (col === n) return;

		if (col <= rows) {
			steps += '#';
		} else steps += ' ';

		printColumn(col + 1);
	};
	printColumn();
	console.log(steps);

	printSteps(n, rows + 1);
};

const printSteps2 = (n = 5, row = 0, stair = '') => {
	if (row === n) return;
	if (stair.length === n) {
		console.log(stair);
		// start a new row
		return printSteps(n, row + 1);
	}

	// continue with this column
	if (stair.length <= row) {
		// row 3 shd have 3#
		stair += '#';
	} else stair += ' ';
	printSteps2(n, row, stair);
};

printSteps2(5);
module.exports = printSteps2;
