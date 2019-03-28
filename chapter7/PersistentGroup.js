class PGroup {
  // Your code here
  constructor(array = []){
    this.content = [...array];
  }
  static empty = new PGroup;
  add(c){
    if(this.has(c)){
      new PGroup(this.content);
    } else {
      const temp = this.content.slice();
      temp.push(c);
      return new PGroup(temp);
    }
  }
  delete(c){
    if(this.has(c)) {
      const index = this.content.indexOf(c);
      const temp = this.content.slice();
      temp.splice(index, 1);
      return new PGroup(temp);
    } else {
      return new PGroup(this.content);
    }
  }
  has(c){
    return this.content.includes(c);
  }
}

// PGroup.empty = new PGroup;

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
