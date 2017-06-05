function sumPrimes(num) {
var sumPrime=0;
 for(var j=2;j<=num;j++)
 {
   var count=0;
   
   for( var i=1;i<=num;i++)
  {
    if(j%i==0)
    {
      count++;
    
    }
  }
   if(count==2){
     sumPrime+=j;
   }
   
 }
  return sumPrime;
}

sumPrimes(10);
