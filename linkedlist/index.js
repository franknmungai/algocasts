// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insertFirst(data){
        const node = new Node(data, this.head);
        this.head = node;
    }

    size(){
        
        if(!this.head) return 0;
        let count = 1;

        let node = this.head;

        while (node.next) {
            count++;
            node = node.next;
        }
        return count;
    }
}

module.exports = { Node, LinkedList };
