// Fill in the regular expressions

verify(/^(m|b)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/(e|s)$/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/(t|y|i)$/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/^(h|s)/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/^b/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/tentot/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/^(r|w)/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}
