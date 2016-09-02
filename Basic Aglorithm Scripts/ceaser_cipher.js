function rot13(str) {
  var answer = [];
  for (var i in str) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
      answer.push(str[i]);
      continue;
    } else {
      if (str.charCodeAt(i) < 78) {
        answer.push(String.fromCharCode(str.charCodeAt(i) + 13));
        continue;
      } else {
        answer.push(String.fromCharCode(str.charCodeAt(i) - 13));
        continue;
      }
    }
  }
  return answer.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
