class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value, decode) {
    let newNode;
    if (decode) newNode = value;
    else newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    const temp = this.first;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    temp.next = null;
    this.length--;
    return temp;
  }
}

class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.operation = false;
    this.queueItems = [];
    this.size = 0;
  }

  enqueue(value) {
    this.pushStack.push(value, false);
    this.size = this.pushStack.length + this.popStack.length;
    this.operation = false;
    return this;
  }

  dequeue() {
    if (this.popStack.length > 0) {
      this.size = this.pushStack.length + this.popStack.length - 1;
      this.operation = true;
      return this.popStack.pop();
    }

    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop(), true);
    }

    this.size = this.pushStack.length + this.popStack.length - 1;
    this.operation = true;
    return this.popStack.pop();
  }

  traverseStack(currentNode, type) {
    let tempArray = [];
    if (type === "pop") {
      while (currentNode) {
        tempArray.push(currentNode.value);
        currentNode = currentNode.next;
      }
    } else {
      while (currentNode) {
        tempArray.unshift(currentNode.value);
        currentNode = currentNode.next;
      }
    }

    return tempArray;
  }

  printItems() {
    let currentNode, tempArray;
    this.queueItems = [];
    if (this.operation) {
      currentNode = this.popStack.first;
      this.queueItems = this.traverseStack(currentNode, "pop");

      tempArray = [];

      if (this.pushStack.length !== 0) {
        currentNode = this.pushStack.first;
        tempArray = this.traverseStack(currentNode, "push");
      }

      this.queueItems = [...this.queueItems, ...tempArray];
    } else {
      tempArray = [];
      if (this.popStack.length !== 0) {
        currentNode = this.popStack.first;
        tempArray = this.traverseStack(currentNode, "pop");
      }

      currentNode = this.pushStack.first;

      this.queueItems = this.traverseStack(currentNode, "push");
      this.queueItems = [...tempArray, ...this.queueItems];
    }

    return console.log(this.queueItems);
  }
}

myQueue = new Queue();
myQueue.enqueue("Yeah");
myQueue.enqueue("Heaven");
myQueue.enqueue("Hard");
myQueue.enqueue("imagine");
myQueue.printItems();
myQueue.dequeue();
myQueue.printItems();
myQueue.dequeue();
myQueue.enqueue("Yet");
myQueue.enqueue("More");
myQueue.enqueue("Much");
myQueue.printItems();
myQueue.dequeue();
myQueue.printItems();
