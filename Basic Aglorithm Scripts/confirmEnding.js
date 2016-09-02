function confirmEnding(str, target) {
 var str1=str.split(" ").join("");
  var a=str1.length-target.length;
  var b = target.length;
  var str2=str1.substr(a,b);
  if(str2==target)
    
    { // "Never give up and good luck will find you."
  // -- Falcor
  return true;
}
  return false;
} 

confirmEnding("He has to give me a new name", "name");
