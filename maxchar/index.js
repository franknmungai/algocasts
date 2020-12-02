// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const strArr = Array.from(str);
	let max = 0;
	let character = '';

	for (let i = 0; i < strArr.length; i++) {
		const ch1 = strArr[i];
		let count = 0;
		for (let j = i; j < strArr.length; j++) {
			const ch2 = strArr[j];

			if (ch1 === ch2) count += 1;
		}

		if (count > max) {
			max = count;
			character = ch1;
		}
	}

	return character;
}

const maxChar2 = (str) => {
	const chars = {};
	const arr = Array.from(str);

	for (let i = 0; i < arr.length; i++) {
		const c = arr[i];
		if (chars[c]) {
			chars[c] += 1;
			continue;
		}
		chars[c] = 1;
	}

	console.log({ chars });
	let max = 0;
	let character;
	const keys = Object.keys(chars);

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (chars[key] > max) {
			max = chars[key];
			character = key;
		}
	}

	return character;
};

console.log(maxChar2('ab1c1d1e1f1g11111111111ggcceee'));
module.exports = maxChar2;
