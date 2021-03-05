class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) return console.log("You can't peek out into void");
    return console.log(this.first);
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return console.log("You can't empty empty");
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return this;
  }

  isEmpty() {
    if (this.length === 0) return console.log("Into the Void here");
    return console.log("There is something deep inside it");
  }

  printList() {
    let currentNode = this.first;
    let queueItems = [];

    while (currentNode) {
      queueItems.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return console.log("Queue", queueItems);
  }
}

const myQueue = new Queue();
myQueue.enqueue("Icecream");
myQueue.printList();
myQueue.isEmpty();
myQueue.enqueue("Pani puri");
myQueue.enqueue("Pizza");
myQueue.printList();
myQueue.peek();
myQueue.dequeue();
myQueue.printList();
myQueue.enqueue("French Fries");
myQueue.enqueue("Shezvan");
myQueue.printList();
