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
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value = null) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
    this.sortedLL = new Node();
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
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index === 1) return this.prepend(value);
    else if (index > this.length) return this.append(value);
    else {
      const newNode = new Node(value);
      let currentNode = this.traverseToIndex(index - 1);

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
    }
  }

  remove(index) {
    if (index === 1) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let currentNode = this.traverseToIndex(index - 1);
    if (index === this.length) {
      currentNode.next = null;
      this.length--;
      return this;
    }

    currentNode.next = currentNode.next.next;
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
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  bubbleSort() {
    let firstNode, secondNode;
    firstNode = this.head;

    while (firstNode !== null) {
      secondNode = this.head;

      while (secondNode !== null) {
        if (firstNode.value < secondNode.value) {
          let temp = secondNode.value;
          secondNode.value = firstNode.value;
          firstNode.value = temp;
        }

        secondNode = secondNode.next;
      }

      firstNode = firstNode.next;
    }

    return this;
  }

  getMidNode(start, last) {
    if (start === null) return null;

    let slowTraverse = start;
    let fastTraverse = start.next;

    while (fastTraverse !== last && fastTraverse.next !== null) {
      fastTraverse = fastTraverse.next.next;
      slowTraverse = slowTraverse.next;
    }

    return slowTraverse;
  }

  setMergeSort() {
    let head = this.mergeSort(this.head);
    let setTail = head;

    while (setTail.next !== null) setTail = setTail.next;
    console.log(setTail);

    return (this.tail = setTail);
  }

  mergeSort(linkedList) {
    let start = linkedList;
    let last = null;
    if (start.next === null) return start;

    let middle = this.getMidNode(start, last);
    let middleNext = middle.next;
    middle.next = null;

    let rightPart = middleNext;
    let leftPart = start;

    this.head = this.mergeLL(
      this.mergeSort(leftPart),
      this.mergeSort(rightPart)
    );

    return this.head;
  }

  mergeLL(left, right) {
    let sorted;

    if (left === null) return right;
    if (right === null) return left;

    if (left.value < right.value) {
      sorted = new Node(left.value);
      sorted.next = this.mergeLL(left.next, right);
    } else {
      sorted = new Node(right.value);
      sorted.next = this.mergeLL(left, right.next);
    }

    return sorted;
  }

  binarySearch(key) {
    let startNode = this.head;
    let lastNode = null;

    do {
      let mid = this.getMidNode(startNode, lastNode);

      if (mid === null) return null;
      if (mid.value === key) return console.log("Found ", mid.value);
      else if (mid.value < key) {
        startNode = mid.next;
      } else {
        lastNode = mid;
      }
    } while (lastNode === null || lastNode !== startNode);

    return console.log("Not Found");
  }

  printList(node = this.head) {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2);
myLinkedList.insert(2, 56);
myLinkedList.insert(1, 22);
myLinkedList.insert(myLinkedList.length, 74);

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
  console.log("5. Reverse a Linked List".display);
  console.log("6. Delete element from Linked List".delete);
  console.log("7. Sort the Linked List using Bubble Sort".insert);
  console.log("8. Sort the Linked List using Merge Sort".insert);
  console.log("9. Search node using Binary Search".display);

  choice = +prompt("Enter your choice - ");

  switch (choice) {
    case 0:
      console.log("Hmm, matter of choice!\n".rainbow);
      return;

    case 1:
      console.log("Linked List - ", myLinkedList.printList());
      break;

    case 2:
      value = +prompt("Enter Value to Append element - ");
      myLinkedList.append(value);
      console.log("After Append Linked List - ", myLinkedList.printList());
      break;

    case 3:
      value = +prompt("Enter Value to Prepend element - ");
      myLinkedList.prepend(value);
      console.log("After Prepend Linked List - ", myLinkedList.printList());
      break;

    case 4:
      value = +prompt("Enter Value to Insert element - ");
      index = +prompt("Enter Position to Insert element - ");

      if (index <= 0)
        return console.log("You know this is wrong, Bbye!\n".wrong);
      myLinkedList.insert(index, value);
      console.log("After Insertion Linked List - ", myLinkedList.printList());
      break;

    case 5:
      if (myLinkedList.length === 0) {
        return console.log("404, you can't remove anything from void".wrong);
      }

      myLinkedList.reverse();
      console.log("Reversal of Linked List - ", myLinkedList.printList());
      break;

    case 6:
      if (myLinkedList.length === 0) {
        return console.log("404, you can't remove anything from void".wrong);
      }

      index = +prompt("Enter position of element - ");
      if (index <= 0 || index > myLinkedList.length)
        return console.log("You know this is wrong, Bbye!\n".wrong);

      myLinkedList.remove(index);
      console.log("After Deletion Linked List - ", myLinkedList.printList());
      break;

    case 7:
      if (myLinkedList.length === 0) {
        console.log("Linked List is Empty");
      } else {
        myLinkedList.bubbleSort();
        console.log("After sorting - ", myLinkedList.printList());
      }

      break;

    case 8:
      myLinkedList.sortedLL = null;
      myLinkedList.setMergeSort();
      console.log("After merge sort - ", myLinkedList.printList());
      break;

    case 9:
      value = +prompt("Enter Value to Search - ");
      myLinkedList.bubbleSort();
      myLinkedList.binarySearch(value);
      break;

    default:
      console.log("You know this is wrong, Bbye!\n".wrong);
      return;
  }
} while (choice !== 0);
