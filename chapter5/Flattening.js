// The author's solution cannot solve this problem if we are given 
// a multiple level nested array like this one [[1,2,[1,2]],[1,2]]
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

const flattening = array => {
  const result = [];
  if(array.length === 0) return result;
  for(let a of array) {
//    if(typeof(a) !== 'object') {
    if(({}).toString.call(a) !== "[object Array]") {
      result.push(a);
    }
    else {
      result.push(...flattening(a));
    }
  }
  return result;
};

console.log(flattening(arrays));

// → [1, 2, 3, 4, 5, 6]
