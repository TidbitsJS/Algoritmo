const array1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BubbleSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

function BubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
        console.log("Checking swapping");
      }
    }
    if (!isSwapped) {
      console.log("Swapping...");
      break;
    }
  }

  return arr;
}

// BubbleSort1(array2);
// console.log(array2);
BubbleSort2(array1);
console.log(array1);
