/** Node: node for a queue. */
// FIFO - first one in, first one out.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {

  // we use a doubly linked list to access head & tail
  constructor(listItems = []) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    // for each value in list item create a queue item
    for(let val of listItems) this.enqueue(val)
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // of it's the first item in queue assign head/tail, inc size of list
    if(this.head == null){
      let newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      // otherwise, create a new node, find previous tail re-assign next to that new node. assign tail to the newNode. Inc size for new node
      let newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error("List is empty!");
    };

    let itemToRemove = this.head;
    this.head = itemToRemove.next;
    // itemToRemove.next = null; -- not needed
    this.size --;
    return itemToRemove.val;
  };

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(!this.head){
      throw new Error("List is empty!")
    }
    return this.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    };

    return false;
  }
}

module.exports = Queue;
