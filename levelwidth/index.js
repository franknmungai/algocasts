const Node = require('./node');
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let nodes = [root, 's'];
	let counters = [0];

	while (nodes.length > 1) {
		const node = nodes.shift();
		if (node === 's') {
			// start a new level
			nodes.push('s');
			counters.push(0);
			continue;
		}

		// count child nodes at a level
		nodes.push(...node.children);
		counters[counters.length - 1]++;
	}

	return counters;
}

const node = new Node(0); //root node
node.add(1);
node.add(2);
node.add(3);
node.children[0].add(4);
node.children[1].add(5);
node.children[2].add(6);

console.log(levelWidth(node));
module.exports = levelWidth;
