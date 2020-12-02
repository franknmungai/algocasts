// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const createCharMap = (stringA) => {
	const charMapA = {};
	stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
	console.log({ stringA });

	for (let str of stringA) {
		charMapA[str] = charMapA[str] + 1 || 1;
	}

	return charMapA;
};

function anagrams(stringA, stringB) {
	const charMapA = createCharMap(stringA);
	const charMapB = createCharMap(stringB);

	const characters = Object.keys(charMapA);
	if (characters.length !== Object.keys(charMapB).length) {
		return false;
	}

	for (const ch of characters) {
		if (!charMapB[ch] || charMapA[ch] !== charMapB[ch]) {
			return false;
		}
	}
	return true;
}

const parseStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();
const anagrams2 = (strA, strB) => {
	strA = parseStr(strA);
	strB = parseStr(strB);
	if (strA.length !== strB.length) {
		return false;
	}

	const arrA = Array.from(strA);
	const arrB = Array.from(strB);

	return arrA.every((ch) => {
		if (!arrB.includes(ch)) return false;

		const countA = arrA.reduce((acc, curr) => (curr === ch ? ++acc : acc), 0);
		const countB = arrB.reduce((acc, curr) => (curr === ch ? ++acc : acc), 0);
		if (countA !== countB) return false;
		return true;
	});
};

const anagrams3 = (strA, strB) => {
	if (strA.length !== strB.length) return false;
	const arrA = Array.from(parseStr(strA));
	const arrB = Array.from(parseStr(strB));

	return arrA.sort().join('') === arrB.sort().join('');
};
console.log(anagrams2('One one', 'One one C'));
module.exports = anagrams3;
