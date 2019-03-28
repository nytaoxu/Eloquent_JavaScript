// Your code here.

const loop = (v, test, update, body) => {
  while(test(v)) {
    body(v);
    v = update(v);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
