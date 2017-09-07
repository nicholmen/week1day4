// The second argument/parameter is expected to be a function

// Refactor the function findWaldo to use the forEach() method instead of a for loop.


// for (var i = 0; i < products.length; i++) {
//     console.log(products[i]);
//   }
//   The forEach() method on arrays can be used to achieve the same thing:
  
//   products.forEach(function(product, index) {
//     console.log(product);
//   });

arr.forEach(function(who, idx ) {
    if (who === "Waldo") {
        found (idx);
    }

})

function findWaldo(arr, found) {
// Refactor the function findWaldo to use the forEach() method instead of a for loop.
    arr.forEach(function(who, idx ) {
        if (who === "Waldo") {
            found (idx);
        }
    })
    
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] === "Waldo") {
//         found(i);   // execute callback
//       }
//     }
//   }
  
  function actionWhenFound(i) {
    console.log("Found him at index " + i + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  
  console.log(findWaldo)

//   var a = ['a', 'b', 'c'];
  
//   a.forEach(function(element) {
//       console.log(element);
//   });
  
//   // a
//   // b
//   // c
//   SyntaxEdit
  
//   arr.forEach(function callback(currentValue, index, array) {
//       //your iterator
//   }[, thisArg]);