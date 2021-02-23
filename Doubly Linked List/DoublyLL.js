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
  constructor(value, next = null, prev = null) {
    (this.value = value), (this.next = next), (this.prev = prev);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
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

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    let array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index === 1) return this.prepend(value);
    if (index > this.length) return this.append(value);

    const newNode = new Node(value);
    if (index === this.length) {
      newNode.prev = this.tail.prev;
      this.tail.prev.next = newNode;
      this.tail.prev = newNode;
      newNode.next = this.tail;
      this.length++;

      return this;
    }

    let currentNode = this.traverseToIndex(index - 1);

    newNode.next = currentNode.next;
    currentNode.next.prev = newNode;
    newNode.prev = currentNode;
    currentNode.next = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index === 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let currentNode = this.traverseToIndex(index - 1);
      currentNode.next.next.prev = currentNode;
      currentNode.next = currentNode.next.next;
    }

    this.length--;
    return this;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.prev = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.prev = this.head.next;
    this.head.next = null;
    this.head = first;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(22);
myDoublyLinkedList.append(5);
myDoublyLinkedList.prepend(11);
myDoublyLinkedList.insert(1, 15);
myDoublyLinkedList.insert(4, 33);
myDoublyLinkedList.insert(3, 10);
myDoublyLinkedList.insert(5, 77);
myDoublyLinkedList.remove(1);
myDoublyLinkedList.remove(6);
myDoublyLinkedList.remove(2);
myDoublyLinkedList.insert(2, 7);

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
      console.log("Linked List - ", myDoublyLinkedList.printList());
      break;

    case 2:
      value = +prompt("Enter Value to Append element - ");
      myDoublyLinkedList.append(value);
      console.log(
        "After Append Linked List - ",
        myDoublyLinkedList.printList()
      );
      break;

    case 3:
      value = +prompt("Enter Value to Prepend element - ");
      myDoublyLinkedList.prepend(value);
      console.log(
        "After Prepend Linked List - ",
        myDoublyLinkedList.printList()
      );
      break;

    case 4:
      value = +prompt("Enter Value to Insert element - ");
      index = +prompt("Enter Position to Insert element - ");

      if (index <= 0)
        return console.log("You know this is wrong, Bbye!\n".wrong);
      myDoublyLinkedList.insert(index, value);
      console.log(
        "After Insertion Linked List - ",
        myDoublyLinkedList.printList()
      );
      break;

    case 5:
      if (myDoublyLinkedList.length === 0) {
        return console.log("404, you can't remove anything from void".wrong);
      }

      myDoublyLinkedList.reverse();
      console.log("Reversed Linked List - ", myDoublyLinkedList.printList());
      break;

    case 6:
      if (myDoublyLinkedList.length === 0) {
        return console.log("404, you can't remove anything from void".wrong);
      }

      index = +prompt("Enter position of element - ");
      if (index <= 0 || index > myDoublyLinkedList.length)
        return console.log("You know this is wrong, Bbye!\n".wrong);

      myDoublyLinkedList.remove(index);
      console.log(
        "After Deletion Linked List - ",
        myDoublyLinkedList.printList()
      );
      break;

    default:
      console.log("You know this is wrong, Bbye!\n".wrong);
      return;
  }
} while (choice !== 0);
