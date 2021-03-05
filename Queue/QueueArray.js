class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    console.log("Adding", item);
    this.queue.push(item);
    return this.queue;
  }

  dequeue() {
    if (this.isEmpty()) return console.log("Can't delete from empty queue");
    console.log("Deleting", this.queue[0]);
    this.queue.shift();
    return this.queue;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return console.log("Queue is empty");
    }

    return console.log("First element", this.queue[0]);
  }

  printQueue() {
    if (this.isEmpty()) return console.log("Empty Queue");
    console.log("\nPrinting Queue items...");
    for (let item of this.queue) {
      console.log(item);
    }

    console.log("\n");
    return this.queue;
  }

  size() {
    return console.log("Queue Length ", this.queue.length);
  }
}

const myQueue = new Queue();
myQueue.dequeue();
myQueue.printQueue();

myQueue.enqueue("Nobita");
myQueue.enqueue("Shizuka");
myQueue.enqueue("Doremon");
myQueue.printQueue();

myQueue.peek();
myQueue.isEmpty();
myQueue.dequeue();
myQueue.size();

myQueue.enqueue("Tom");
myQueue.enqueue("Jerry");
myQueue.size();
myQueue.printQueue();

myQueue.peek();
