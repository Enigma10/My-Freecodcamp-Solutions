
function reverseString(str) {
  var string= str.split('');
  string1=string.reverse();
  string2=string1.join('');
  return string2;
}

reverseString("hello");
