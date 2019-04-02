let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|.)'(.|$)/g, (a, b, c) => {
  if(/[a-zA-Z]/.test(b) && /[a-zA-Z]/.test(c)) return a;
  else return `${b}"${c}`
}));
// → "I'm the cook," he said, "it's my job."
