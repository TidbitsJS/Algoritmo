class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) + i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    console.log(this.data);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return {
            data: [currentBucket[i][0], currentBucket[i][1]],
            location: address,
          };
        }
      }
    }
    return undefined;
  }

  deleteItem(value) {
    let item = this.get(value);
    delete this.data[item.location];
    return console.log("Deleted", item.data[0]);
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) keysArray.push(this.data[i][0][0]);
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(100);

myHashTable.set("grapes", 1000);
let found = myHashTable.get("grapes");
console.log("Found", found);

myHashTable.set("apple", 100);
found = myHashTable.get("apple");
console.log("Found", found);

myHashTable.set("oranges", 50);
found = myHashTable.get("oranges");
console.log("Found", found);

let keys = myHashTable.keys();
console.log(keys);

myHashTable.deleteItem("apple");
keys = myHashTable.keys();
console.log(keys);
