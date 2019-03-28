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
//    for(let x of obj) result.content.push(x);
    for(let x of obj) result.add(x);
    return result;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
