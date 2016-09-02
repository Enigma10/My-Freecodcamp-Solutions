function binaryAgent(str) {
 var binary=str.split(' ');
 var decimal=[];
 var string=[]; 
  for(var i=0;i<binary.length;i++)
  {
    decimal.push(parseInt(binary[i], 2));  
  }  
  for(var j=0;j<decimal.length;j++){
    string.push(String.fromCharCode(decimal[j]));
  }
  return string.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
