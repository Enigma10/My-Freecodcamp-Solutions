//function destroyer(arr) {
  // 1. Create a new Array args and populate it with the arguments
  //var args = Array.prototype.slice.call(arguments);

  // 2. Use shift to extract the first element in the array which contains the string we want to filter.
  //var searchIn  = args.shift(); 

  // 3. Use array.filter to loop over the original array
  //return searchIn.filter(function(element){
    //return args.indexOf(element) === -1;
  //});
//}
function destroyer(arr) 
{
  for (var i = 1; i < arguments.length; i++)
{
  var search=arguments[i];
  arr = arr.filter(function(val){return val !== search;});
}
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);