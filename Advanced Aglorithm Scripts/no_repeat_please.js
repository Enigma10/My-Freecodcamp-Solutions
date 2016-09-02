function permAlone(string) {
 
var permArr = [], usedChars = [];
  var consecutive = /(.)\1/;
 
  return permute(string).filter(function(currentPerm) {
    return !consecutive.test(currentPerm);
  }).length;  // We return the length of the filtered array.
 
function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length === 0) permArr[permArr.length] = usedChars.join("");
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
return permArr;
}
}

permAlone('aab');
