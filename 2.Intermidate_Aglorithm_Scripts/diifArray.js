
function diffArray(arr1, arr2) {
 var newArr = [];

arr1.concat(arr2).forEach(function(item) { 
  
if((arr1.indexOf(item) == -1 || arr2.indexOf(item) ==-1) ) {
newArr.push(item);
console.log(newArr.push(item));
}
});
  
  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 


