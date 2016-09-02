
function palindrome(str) {

  var strippedStr = str.toLowerCase().replace(/\W|_/g, '');
  var reversedStr = strippedStr.split('').reverse().join('');

  if(reversedStr === strippedStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("not a palindrome");
