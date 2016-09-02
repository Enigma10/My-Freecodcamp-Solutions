function findLongestWord(str) {
  var str1=str.split(" ");
  var max = str1[0].length;
  for(var j=1; j<=str1.length-1;j++)
    { 
    if(str1[j].length>max){
      max=str1[j].length;
      j++;
    }
      }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
