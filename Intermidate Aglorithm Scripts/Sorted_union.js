
function uniteUnique(arr) {
  var newArr=arguments[0];
  for(var i=1 ;i<arguments.length;i++)
    {
      for(var j=0;j<arguments[i].length;j++)
     {
 //     var newarr1=arguments[i];
       if(newArr.indexOf(arguments[i][j])==-1)
       {
        newArr.push(arguments[i][j]);     
       }

     } 
      
    }
    
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
