// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
	if (node.left.data > max) return false;
	if (node.right.data < min) return false;

	// validate(node.left);
}

module.exports = validate;
