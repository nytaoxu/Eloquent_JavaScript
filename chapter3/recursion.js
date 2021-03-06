// Starting from 1, you can either add m or multiply by n.

const findSolution = (target, m, n) => {
  const find = (current, history) => {
  // return the sequence to reach target from 1 or 'null' if no such sequence can be found.
    if(current === target) return history;
    if(current > target) return null;
    return find(current + m, `(${history} + ${m})`) ||
      find(current * n, `(${history} * ${n})`);
  }
  return find(1, "1");
}

console.log(findSolution(24, 5, 3));
console.log(findSolution(36, 3, 3));
