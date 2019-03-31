class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  while(true) {
    try{
      if(primitiveMultiply(a, b) === a * b) {
        return a * b;
      }
    } catch(e) {
      if(e instanceof MultiplicatorUnitFailure) {
        console.log('Correct Exception.');
      } else {
        console.log('Incorrect Exception.');
      }
    } finally {
      console.log('Loop done.');
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
