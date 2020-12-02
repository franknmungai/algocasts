// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	return str === Array.from(str).reverse().join('');
}

const palindrome2 = (str) => {
	const midpoint = Math.floor(str.length / 2);

	const arr = Array.from(str.slice(0, midpoint));

	return arr.every((ch, i) => ch === str[str.length - i - 1]);
};

module.exports = palindrome2;

const delay = (n) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, n);
	});
};

(async (n) => {
	console.log('1');
	await delay(n);
	console.log('2');
})(5000);
