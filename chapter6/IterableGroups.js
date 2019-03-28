// Your code here (and the code from the previous exercise)

class Group {
  // Your code here.
  constructor(){
    this.content = [];
  }
  add(element){
    if(!this.has(element)) {
      this.content.push(element);
      return element;
    }
    return null;
  }
  delete(element){
    let index = this.content.indexOf(element);
    if(index >= 0) {
      this.content.splice(index, 1);
      return element;
    }
    return null;
  }
  has(element){
    return this.content.includes(element);
  }
  static from(obj) {
    const result = new Group();
    for(let x of obj) result.add(x);
    return result;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

//Group.prototype[Symbol.iterator] = function() {
//  return new GroupIterator(this);
//};

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.current = 0;
  }
  next() {
    if(this.current === this.group.content.length) return {done: true};
    
//    this.current++;
    return {
      value: this.group.content[this.current++],
      done: false
    };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
