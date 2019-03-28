function every(array, test) {
  // Your code here.
  for(let a of array) {
    if(!test(a)) return false;
  }
  return true;
}

function every_alt(array, test) {
  // using Array.some
  if(array.some(a => !test(a))) return false;
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every_alt([1, 3, 5], n => n < 10));
// → true
console.log(every_alt([2, 4, 16], n => n < 10));
// → false
console.log(every_alt([], n => n < 10));
// → true
