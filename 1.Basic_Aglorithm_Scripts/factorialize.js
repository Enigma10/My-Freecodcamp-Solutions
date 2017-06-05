function factorialize(num) {
  var i=num;
  if(num == 0)
    {
      num=1;
      return num;
      
    }
  else
    {
      for( i=num ;i>1; i--)
      {
       num = num*(i-1); 
      }
    }
  return num;
}

factorialize(5);
