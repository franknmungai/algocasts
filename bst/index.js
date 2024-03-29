// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data, node = this) {
		if (data > this.data) {
			if (!node.right) {
				return (node.right = new Node(data));
			}
			this.insert(data, node.right);
		} else {
			if (!node.left) {
				return (node.left = new Node(data));
			}
			this.insert(data, node.left);
		}
	}

	contains(data) {
		if (this.data === data) {
			return this;
		}
		if (this.left && this.data < data) {
			return this.left.contains(data);
		}
		if (this.right && this.data > data) {
			return this.right.contains(data);
		}
		return null;
	}
}

module.exports = Node;
