// Your code here.
// Functions cannot be compared, though. It is assumed that NaN is equal to NaN, just like Infinity is equal to Infinity.
const deepEqual = (obj1, obj2) => {
  if(obj1 === obj2) return true;
  if(typeof(obj1) !== typeof(obj2)) return false;
  if(typeof(obj1) !== 'object') {
    if(Number.isNaN(obj1) && Number.isNan(obj2)) return true;
    return false;
  }
  if(typeof(obj1) === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length) return false;
    for(let key of keys1){
      if(!keys2.includes(key)) return false;
      if(!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
