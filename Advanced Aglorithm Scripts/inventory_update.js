function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var currentInv=createObj(arr1);
 
  arr2.forEach(function(item){
  if(currentInv.hasOwnProperty(item[1]))
  { //alert('hello');
    currentInv[item[1]]+=item[0];
  } 
   else
   {
     currentInv[item[1]]=item[0];
   }
 }); 
  
  console.log(currentInv);
  return createArray(currentInv).sort(function(a,b){
       if (a[1] < b[1]) return -1;    
        if (a[1] > b[1]) return 1;
       // return 0;
  });
 
 function createObj(arr)
  {
    var obj={};
    arr.forEach(function(item){
    obj[item[1]]=item[0];
    
  });  
    return obj;
 }

 function createArray(obj)
  {
    var arr=[];
      for(var key in obj)
      {
         arr.push([obj[key],key]);
         }
    return arr;
  }  
  
  
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
