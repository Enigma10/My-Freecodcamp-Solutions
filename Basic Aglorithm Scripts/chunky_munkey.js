function chunkArrayInGroups(arr, size) {
// function chunk(arr, size) {  
  var temp = [],
      i = 0;

  while (i < arr.length) {
    temp.push(arr.slice(i, i += size));
  }
  return temp;
}
//chunk(['a', 'b', 'c', 'd'], 2);  
chunkArrayInGroups(["a", "b", "c", "d"], 2);
