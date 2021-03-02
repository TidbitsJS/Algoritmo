class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  peek() {
    if (this.array.length === 0) return console.log("Nothing to peek out");
    return console.log(this.array[this.array.length - 1]);
  }

  isEmpty() {
    if (this.array.length === 0) return console.log("Yes, it's Empty here");
    return console.log("There is something inside, not void for sure");
  }

  pop() {
    if (this.array.length === 0) return console.log("Nothing to pop");
    this.array.pop();
  }

  printItems() {
    return console.log(this.array);
  }

  getLength() {
    return console.log(this.array.length);
  }

  reverseStack() {
    let reverse = [];
    let arrayLength = this.array.length;
    while (arrayLength > 0) {
      reverse.push(this.array.pop());
      arrayLength--;
    }
    this.array = reverse;
  }
}

const myStack = new Stack();
myStack.peek();
myStack.pop();
myStack.push("Google");
myStack.push("udemy");
myStack.push("youtube");
myStack.push("discord");
myStack.pop();
myStack.isEmpty();
myStack.push("gmail");
myStack.push("spotify");
myStack.peek();
myStack.printItems();
myStack.getLength();
myStack.reverseStack();
myStack.printItems();
myStack.pop();
myStack.printItems();
myStack.push("stackoverflow");
myStack.push("Github");
myStack.printItems();
myStack.getLength();
myStack.peek();
