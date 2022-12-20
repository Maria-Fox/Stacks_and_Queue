/** Node: node for a stack. */
// LIFO : last one in first one out.
// remove from the HEAD/ TOP of the list. Add to the TOP of the list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    // this.previous = null;
  };
};

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
// Otherwise - Acts as a double linked list.
// https://sebhastian.com/doubly-linked-list-javascript/

class Stack {
  constructor(stack = []) {
    this.head = null;
    this.tail = null;
    // this.previous = null;
    this.size = 0;

    for(item in stack) this.push(item);
  };

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (!this.tail) this.tail = newNode;
    // if there's already a head re-assign to new node and add a next property to the old head.
    if (this.head) newNode.next = this.head;

    this.head = newNode;
    this.size++;
    return;
  };

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.head) {
      throw new Error("Stack is empty!");
    }
    let nodeToRemove = this.head.val;
    if (this.head == this.tail) {
      this.tail = null;
    };

    // reassign new head to the previous head's "next"
    this.head = this.head.next;
    this.size--;
    return nodeToRemove;
  };

  /** peek(): return the value of the TOP node in the stack. */

  peek() {
    return this.head.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    } else {
      return false;
    };
  };
};

module.exports = Stack;
