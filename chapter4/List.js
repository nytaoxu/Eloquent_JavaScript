// Your code here.

const arrayToList = array => {
  let list = null, i = array.length - 1;
  while(i >= 0) {
  	let temp = {
      value: array[i],
      rest: list
    };
    list = temp;
    i--;
  }
  return list;
};

const listToArray = list => {
  const result = [];
  while(list) {
    result.push(list.value);
    list = list.rest;
  }
  return result;
};

const prepend = (value, list) => {
  return {
    value,
    rest: list
  };
};

const nth = (list, n) => {
  if(n < 0) return undefined;
  while(list && n > 0) {
    list = list.rest;
    n--;
  }
  if(!list) return undefined;
  return list.value;
};

const nth_recursion = (list, n) => {
  if(n < 0) return undefined;
  if(!list) return undefined;
  if(n === 0) return list.value;
  return nth_recursion(list.rest, n - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth_recursion(arrayToList([10, 20, 30]), 1));
// → 20
