function steamrollArray(arr) 
{
  var newArr=[];
  function flattenArray(arr){
 
  if(!Array.isArray(arr))
   {
     newArr.push(arr);
    
  }
   else
   {
       for(var i=0;i<arr.length;i++)
     {
       flattenArray(arr[i]);
    }
 }
return newArr;
}
  // I'm a steamroller, baby
  //var result=
  return flattenArray(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);
