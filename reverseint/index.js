// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	const arr = n.toString().split('');
	const reversed = arr.reverse();
	if (n < 0) {
		reversed.splice(arr.length - 1, 1); //remove the negative at the end
		reversed.splice(0, 0, '-'); //add the negative to the begining
	}

	return Number(reversed.join(''));
}

const reverseInt2 = (n) => {
	const reversed = n.toString().split('').reverse().join('');
	return parseInt(reversed) * Math.sign(n);
};

module.exports = reverseInt2;
