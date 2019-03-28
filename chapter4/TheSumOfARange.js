// Your code here.

const range = (start, end, step = 1) => {
  const result = [];
  if(step === 0) return result;
  if(step > 0 && start > end) return result;
  if(step <0 && start < end) return result;
  for(let i = start; (step > 0 && i <= end) || (step < 0 && i >= end) ; i += step) result.push(i);
  return result;
};

const sum = nums => {
  let total = 0, i = 0;
  while(i < nums.length){
    total += nums[i];
    i++;
  }
  return total;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
