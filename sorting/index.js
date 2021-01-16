// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

function selectionSort(items) {
	for (let i = 0; i < items.length; i++) {
		let min = i;
		for (let j = i + 1; j < items.length; j++) {
			if (items[j] < items[min]) {
				min = j;
			}
		}

		if (min !== i) {
			const temp = items[i];
			items[i] = items[min];
			items[min] = temp;
		}
	}

	return items;
}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}
	const midpoint = Math.floor(arr.length / 2);
	const left = arr.slice(0, midpoint);
	const right = arr.slice(midpoint);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let results = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}
	if (left.length) results.push(...left);
	if (right.length) results.push(...right);

	return results;
}

console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));
module.exports = { bubbleSort, selectionSort, mergeSort, merge };
