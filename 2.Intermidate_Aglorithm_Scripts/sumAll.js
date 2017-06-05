
function sumAll(arr) {
 var total=0; 
 var min=Math.min.apply(null, arr);
 var max=Math.max.apply(null, arr);
 for(var i=min;i<=max;i++){
   total+=i;
 } 
  return total;
}

sumAll([1, 4]);
