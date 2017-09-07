//Complete the following code for the assertion to pass. 
//The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).

//output should just be c^2?
//result = [25, 169, 289]

var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  
  // console.log(input[1].y)
  
  
  //var input2 = [3, 4, 12, 5, 8, 15]
  
  const result = input.map(function({x, y}){
    // return Math.sqrt( (obj.x * obj.x) + (obj.y * obj.y) );
    return Math.sqrt( (x * x) + (y * y) );
  });
  
  
  //for (var x in input){
  //console.log(
  
  //console.log(input);
  console.log(result)
  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);