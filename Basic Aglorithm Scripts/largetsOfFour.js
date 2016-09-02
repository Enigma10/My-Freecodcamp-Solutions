
function largestOfFour(arr) {
  // You can do this!
  var Largest=[0,0,0,0];
  for(var i=0; i<arr.length;i++)
    for(var J=0; J<arr.length;J++)
    {
     if(arr[i][J]>Largest[i])
       Largest[i]=arr[i][J];
     
    }
  return Largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
