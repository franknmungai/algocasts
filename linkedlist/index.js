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
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
        let last = this.head;

        while(node) {
            if(!node.next) last = node;
            node = node.next;
        }

        return last; //last truthy value hence last node
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head) return;
        let node = this.head;
        while(node.next){
            if(!node.next.next) { //second from last
                node.next = null;
                return;
            }

            node = node.next;
        }
        this.head = null;
    }
}

module.exports = { Node, LinkedList };
