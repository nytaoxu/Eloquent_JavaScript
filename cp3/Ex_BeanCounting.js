// Your code here.

const countBs = string => countChar(string, "B");

const countChar = (string, char) => {
  let total = 0, i = 0;
  while(i < string.length) {
    if(string[i] === char) total++;
    i++;
  }
  return total;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
