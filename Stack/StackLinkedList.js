class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;

      return this;
    }

    const holdingPointer = this.top;
    this.top = newNode;
    this.top.next = holdingPointer;
    this.length++;
    return this;
  }

  peek() {
    if (this.length === 0) return console.log("Nothing to look for");
    return console.log(this.top);
  }

  isEmpty() {
    if (this.length === 0) return console.log("Yes, it's Empty here");
    return console.log("There is something inside, not void for sure");
  }

  pop() {
    if (!this.top) return console.log("Nothing to pop");

    if (this.top === this.bottom) {
      this.bottom = null;
      this.top = null;
      this.length--;
      return console.log("Popped out");
    }

    this.top = this.top.next;
    this.length--;
    return this;
  }

  printStackElements() {
    let currentNode = this.top;
    let data = [];

    while (currentNode) {
      data.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return console.log("Elements", data);
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("youtube");
myStack.push("discord");
myStack.printStackElements();
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.printStackElements();
