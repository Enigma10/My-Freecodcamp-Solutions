function titleCase(str) {
 //var str1=str.split(" ");
 //var str2=str1.join(' '); 
  return  str.split(" ").join(' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot");
