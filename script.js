// Challenge 1
const getCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

console.log(getCelsius(32)); // 0

// Challenge 2
const minMax = arr => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
  });
  
  
  console.log(minMax([1, 2, 3, 4, 5])); 
  // { min: 1, max: 5 }

  // Challenge 3
  (function(length, width) {
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
  })(10, 5);
  
