function mutation(arr) {  
  var elem0 = arr[0].toLowerCase();
  var elem1 = arr[1].toLowerCase();

  for(var i = 0; i < elem1.length; i++){
    var check = elem0.indexOf(elem1[i]);
    if (check === -1){
      return false;
    }
  }
  return true;
}

//function mutation(arr) {
 // var testDomain = new Set(arr[0].toLowerCase()),
   //   testPart = new Set(arr[1].toLowerCase());
 // testDomain.forEach(x => testPart.delete(x));
 // return testPart.size < 1;
//}




mutation(["hello", "hey"]);
