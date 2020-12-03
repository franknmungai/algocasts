// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' 1
//   pyramid(2)
//       ' # ' 1
//       '###' 3
//   pyramid(3)
//       '  #  ' 1
//       ' ### ' 2
//       '#####' 3

function pyramid(n) {
	for (let i = 1; i <= n; i++) {
		let steps = '';

		let diff = 2 * n - 1 - (2 * i - 1);
		const midPoint1 = Math.floor(diff / 2);

		for (let j = 1; j <= 2 * n - 1; j++) {
			const midPoint2 = midPoint1 + (2 * i - 1);
			if (j > midPoint1 && j <= midPoint2) {
				steps += '#';
			} else steps += ' ';
		}
		console.log(steps);
	}
}
const recursivePyramid = (n, row = 0, levels = '') => {
	if (row >= n) return;
	// print another level
	if (levels.length >= 2 * n - 1) {
		console.log(levels);
		return recursivePyramid(n, row + 1);
	}

	// continue printing this level
	// let diff = 2 * n - 1 - (2 * row - 1);
	// const midPoint1 = Math.floor(diff / 2);
	// const midPoint2 = midPoint1 + (2 * row - 1);

	const midpoint = Math.floor((2 * n - 1) / 2);

	if (midpoint - row <= levels.length && midpoint + row >= levels.length) {
		levels += '#';
	} else levels += ' ';

	recursivePyramid(n, row, levels);
};

recursivePyramid(5);

module.exports = pyramid;
