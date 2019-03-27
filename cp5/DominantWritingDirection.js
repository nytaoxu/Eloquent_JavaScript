function dominantDirection(text) {
  // Your code here.
  const scripts = [];// {direction, count}
  for(let t of text){
    let script = characterScript(t.codePointAt(0));
    if(script){
      let index = scripts.findIndex(s => s.direction === script.direction);
      if(index >=0) {
        scripts[index].count++;
      } else {
        scripts.push({
          direction: script.direction,
          count: 1
        });
      }
    }
  }
  return scripts.reduce((a, b) => a.count >= b.count ? a : b).direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
