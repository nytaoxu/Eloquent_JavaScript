// Your code here.

const reverseArray = array => {
  const result = [];
  let i = 0;
  while(i < array.length) {
    result.unshift(array[i]);
    i++;
  }
  return result;
};

const reverseArrayInPlace = array => {
  const middle = Math.floor(array.length / 2);
  let i = 0;
  while(i < middle) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
    i++;
  }
  return array;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
