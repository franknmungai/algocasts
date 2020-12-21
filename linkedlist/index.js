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

    insertLast(data){
        if(!this.head) return this.head = new Node(data);

        const node = new Node(data);
        this.getLast().next = node;
    }

    getAt(index){
        let count = 0;
        let node = this.head;
        while(node){
            if(count === index) return node;

            node = node.next;
            count++;
        }
        return null;
    }

    removeAt(index){
        if(!this.head) return;

        const prevNode = this.getAt(index - 1); //get the previous node
        if(!prevNode) {
            return this.head = null; 
        }
        const nextNode = prevNode.next?.next; //get the next node
        prevNode.next = nextNode;
    }

    print(){
        let chain = '';
        if(!this.head) return chain;
        let node = this.head;

        while (node) {
            chain += node.data + ' ';
            chain += node.next ? '-> ' : '';
            node = node.next;
        }

        console.log(chain);
    }
    reverse(){
       
    }
}

const linkedList = new LinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.print();
linkedList.removeAt(0);
linkedList.print();

module.exports = { Node, LinkedList };
