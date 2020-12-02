// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	const groups = [];

	for (let i = 0; i < array.length; i += size) {
		groups.push(array.slice(i, i + size));
	}
	return groups;
}

const chunk2 = (array, size) => {
	const groups = [];

	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		const lastChunk = groups[groups.length - 1];
		if (!lastChunk || lastChunk.length === size) {
			groups.push([item]);
			continue;
		}
		lastChunk.push(item);
	}

	return groups;
};

chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3);
module.exports = chunk;
