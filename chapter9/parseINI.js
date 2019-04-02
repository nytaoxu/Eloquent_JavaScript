// Run code here in the context of Chapter 9

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach((line, index) => {
    let match;
    if(match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if(match = line.match(/^\[(\w+)\]$/)) {
      section = result[match[1]] = {};
    } else if(!line.match(/\s*(;.*)?/)) {
      throw new Error(`Error found at line ${index + 1}.`);
    }
  });
  
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));

