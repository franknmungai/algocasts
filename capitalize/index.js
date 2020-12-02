// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	const words = str.split(' ');
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		const letters = word.split('');
		letters[0] = letters[0].toUpperCase();
		word = letters.join('');
		words[i] = word;
	}

	return words.join(' ');
}

const capitalize2 = (str) => {
	const words = str.split(' ');

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		words[i] = word[0].toUpperCase() + word.slice(1);
	}

	return words.join(' ');
};
console.log(capitalize3('i love breakfast at bill miller bbq'));

function capitalize3(str) {
	let final = str[0].toUpperCase();

	const words = str.split('');

	for (let i = 1; i < words.length; i++) {
		const ch = words[i];
		const left = words[i - 1];

		if (left === ' ') {
			final += ch.toUpperCase();
		} else final += ch;
	}

	return final;
}

module.exports = capitalize3;
