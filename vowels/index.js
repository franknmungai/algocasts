// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const strArr = Array.from(str);
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	return strArr.filter((ch) => vowels.includes(ch.toLowerCase())).length;
}

module.exports = vowels;
