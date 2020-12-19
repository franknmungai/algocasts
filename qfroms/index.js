// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue { //FIFO
    constructor() {
        this.stack1 = new Stack(); //FILO
        this.stack2 = new Stack();
    }

    // should add an item at the bottom of the queue
    add(item){
        this.stack1.push(item);
    }

    remove(){
        
        while (this.stack1.peek()) {   
            this.stack2.push(this.stack1.pop());
        }

        const item = this.stack2.pop();

        // restore the records back to stack A
        while (this.stack2.peek()) {
            const item = this.stack2.pop();
            this.stack1.push(item);
        }

        return item;        
    }
    peek(){
        while (this.stack1.peek()) {
            const item = this.stack1.pop();
            this.stack2.push(item);
        }
        let peekItem = this.stack2.peek();
        // restore the records back to stack A
        while (this.stack2.peek()) {
            const item = this.stack2.pop();
            this.stack1.push(item);
        }

        return peekItem;
    }

}
module.exports = Queue;
