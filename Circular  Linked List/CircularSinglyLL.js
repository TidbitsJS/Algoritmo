const prompt = require("prompt-sync")({ sigint: true });
const colors = require("colors");

colors.setTheme({
  display: "green",
  insert: "white",
  delete: "red",
  leave: "yellow",
  end: "rainbow",
  wrong: "america",
});

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  traverseToIndex(index) {
    let counter = 1;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  firstNode(value) {
    let newNode = new Node(value);

    this.head = newNode;
    this.head.next = this.head;
    this.tail = this.head;

    this.length++;
    return this;
  }

  append(value) {
    if (!this.head) return this.firstNode(value);
    let newNode = new Node(value);

    this.tail.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend(value) {
    if (!this.head) return this.firstNode(value);
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = this.head;

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 1) return this.prepend(value);
    else if (index > this.length) return this.append(value);
    else {
      let newNode = new Node(value);
      let previousNode = this.traverseToIndex(index - 1);

      newNode.next = previousNode.next;
      previousNode.next = newNode;
    }

    this.length++;
    return this;
  }

  remove(index) {
    if (index === 1) {
      this.tail.next = this.head.next;
      this.head = this.head.next;
      this.length--;
      return this;
    } else {
      let previousNode = this.traverseToIndex(index - 1);
      if (index === this.length) {
        previousNode.next = this.head;
        this.length--;
        return this;
      }

      previousNode.next = previousNode.next.next;
      this.length--;
      return this;
    }
  }

  reverse() {
    if (!this.head.next) return;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second !== this.head) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = first;
    this.head = first;
  }

  printList() {
    let currentNode = this.head;
    let data = [];

    while (currentNode.next !== this.head) {
      data.push(currentNode.value);
      currentNode = currentNode.next;
    }

    data.push(currentNode.value);
    return data;
  }
}

const myCircularLinkedList = new CircularLinkedList();

let choice = 0;
let value, index;

do {
  console.log("\nWelcome to the Linked List Show");
  console.log("Follow the instructions to get in the show");
  console.log("0. To exit without doing anything".yellow);
  console.log("1. Display the Linked List".display);
  console.log("2. Append element in the Linked List".insert);
  console.log("3. Prepend element in the Linked List".insert);
  console.log("4. Insert anywhere in between the Linked List".insert);
  console.log("5. Reverse the Linked List".display);
  console.log("6. Delete element from Linked List".delete);

  choice = +prompt("Enter your choice - ");

  switch (choice) {
    case 0:
      console.log("Hmm, matter of choice!\n".rainbow);
      return;

    case 1:
      if (myCircularLinkedList.length === 0) console.log("Empty LL []");
      else console.log("Linked List - ", myCircularLinkedList.printList());
      break;

    case 2:
      value = +prompt("Enter Value to Append element - ");
      myCircularLinkedList.append(value);
      console.log(
        "After Append Linked List - ",
        myCircularLinkedList.printList()
      );
      break;

    case 3:
      value = +prompt("Enter Value to Prepend element - ");
      myCircularLinkedList.prepend(value);
      console.log(
        "After Prepend Linked List - ",
        myCircularLinkedList.printList()
      );
      break;

    case 4:
      value = +prompt("Enter Value to Insert element - ");
      index = +prompt("Enter Position to Insert element - ");

      if (index <= 0)
        return console.log("You know this is wrong, Bbye!\n".wrong);
      myCircularLinkedList.insert(index, value);
      console.log(
        "After Insertion Linked List - ",
        myCircularLinkedList.printList()
      );
      break;

    case 5:
      if (myCircularLinkedList.length === 0) {
        return console.log("404, you can't remove anything from void".wrong);
      }

      myCircularLinkedList.reverse();
      console.log("Reversed Linked List - ", myCircularLinkedList.printList());
      break;

    case 6:
      if (myCircularLinkedList.length === 0) {
        return console.log("404, you can't remove anything from void".wrong);
      }

      index = +prompt("Enter position of element - ");
      if (index <= 0 || index > myCircularLinkedList.length)
        return console.log("You know this is wrong, Bbye!\n".wrong);

      myCircularLinkedList.remove(index);
      console.log(
        "After Deletion Linked List - ",
        myCircularLinkedList.printList()
      );
      break;

    default:
      console.log("You know this is wrong, Bbye!\n".wrong);
      return;
  }
} while (choice !== 0);
