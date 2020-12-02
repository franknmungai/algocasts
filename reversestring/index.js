// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str.split('').reverse().join('');
}

const reverseAlt1 = (str) => {
	let reversed = '';

	let arr = Array.from(str);
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed += arr[i];
	}
	return reversed;
};

const reverseAlt2 = (str) => {
	const arr = Array.from(str);

	return arr.reduce((acc, curr) => curr + acc, '');
};

// Reverse in place
const reverseAlt3 = (arr) => {
	const halfway = arr.length / 2;

	for (let i = 0; i < halfway; i++) {
		const element = arr[i];
		const pair = arr.length - 1 - i;
		//5->1. 5-1-2
		arr[i] = arr[pair];
		arr[pair] = element;
	}

	return arr;
};

console.log(reverseAlt3([1, 2, 3, 4, 5, 6]));

module.exports = reverseAlt2;
