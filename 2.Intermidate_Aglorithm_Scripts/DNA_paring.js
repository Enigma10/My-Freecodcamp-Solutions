function pairElement(str) {
  var arr1=str.split('');
  var arr2=[];

  var arr=[];
  for(var i=0 ;i<arr1.length;i++){
    if(arr1[i]=='A'){
      arr2[i]='T';
      }
    
    else if(arr1[i]=='T'){
      arr2[i]='A';
      }

    else if(arr1[i]=='G'){
      arr2[i]='C';
      }
    else {
      arr2[i]='G';
      }

  }
  for(var j=0;j<str.length;j++){
    var arr3=[];
    arr3.push(arr1[j]);
    arr3.push(arr2[j]);
    arr.push(arr3);
}
  return arr;
}

pairElement("GCG");
