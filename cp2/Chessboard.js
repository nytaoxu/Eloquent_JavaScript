// Your code here.
// return a ChessBorad with given width and height
const buildChessBoard = (width, height) => {
  let i = 0, j = 0, result = "", currentLetter = " ";
  for(j = 0; j < height; j++) {
    for(i = 0; i < width; i++) {
      result += currentLetter;
      currentLetter = flipLetter(currentLetter);
    }
    result += "\n"; // new line character
    // if width is even, then we need to flip the currentLetter.
    if(width % 2 === 0) currentLetter = flipLetter(currentLetter);
  }
  return result;
}

const flipLetter = letter => {
  return letter === "#" ? " " : "#";
}

console.log(buildChessBoard(8, 8));
console.log(buildChessBoard(15, 15));
console.log(buildChessBoard(3, 5));
