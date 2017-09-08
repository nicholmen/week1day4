var words = ["ground", "control", "to", "major", "tom"];

var wordlength = words.map(function(x) {
return x.length; 
})

var upperCasing = words.map(function(x) {
return x.toUpperCase(); 
})

var reversing = words.map(function(x) {
return x.split('').reverse().join(''); 
})


console.log(wordlength)
console.log(upperCasing)
console.log(reversing)







// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });