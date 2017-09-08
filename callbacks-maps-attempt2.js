// Implement your own version of the built-in array map function.
// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. 
// The function will return a new array based on the results of the callback function.

var words = ["ground", "control", "to", "major", "tom"];

function map (words, cb) {
  var result = [];
  for (word of words) {
    result.push(cb(word));
  }
  return result;
}

  var length = map(words, function(word) {
  return word.length;
});
console.log(length);


var upper = map(words, function(word) {
  return word.toUpperCase();
});
console.log(upper);

var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(reverse);

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]