function sumFibs(num) {
  var first = 0,
      second = 1,
      fibonacci = 1,
      sum = 1; 
 
  while (first + second <= num) {
    fibonacci = first + second;
    first = second;
    second = fibonacci;
    if (fibonacci % 2 !== 0) {      
      sum += fibonacci;     }
  }
 
  return sum; 
}
sumFibs(4);
