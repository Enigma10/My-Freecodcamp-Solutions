function myReplace(str, before, after) {
  if(before[0].toUpperCase()==before[0])
    {
      after=after[0].toUpperCase()+after.slice(1);
      return str= str.replace(before,after);
    }
 return  str= str.replace(before,after);
  
  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");