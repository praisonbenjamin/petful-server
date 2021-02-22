const e = require("express");

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data);

    // if there is nothing in queue, add to first position
    if (this.first === null) {
      this.first = node;
    }
    // if items exist in queue, update last point to new node
    if (this.last) {
      this.last.next = node;
    }

    // if last does not exist
    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.

    // nothing to remove if queue is empty
    if (this.first === null){
      return;
    }

    // save current head of line
    const node = this.first;
    // move head of line to next node
    this.first = this.first.next;
    // if node is last item in queue
    if (node === this.last) {
      this.last = null;
    }
    // return value of head
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    const node = this.first;
    if (node === null) {
      return;
    }
    return node.value;
  }

  all() {
    // Return all items in the queue.
    let valuesArray = [];

    // start at head and if no head exists then return
    if (this.first === null) {
      return;
    } else {
      let currentNode = this.first;
      while (currentNode) {
        valuesArray.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return valuesArray;
  }
}

module.exports = Queue;
