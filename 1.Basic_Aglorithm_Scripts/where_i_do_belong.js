function getIndexToIns(arr, num) {  
arr.push(num);  
 arr.sort(function(a, b) {
  return a - b;
  });
for(i = 0; i < arr.length; i++){  
  if(arr[i] === num){ 
    return i; 
  } 
} 
} 


getIndexToIns([2, 5, 10], 15) ;