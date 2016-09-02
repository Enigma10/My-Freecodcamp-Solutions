
var Person = function(firstAndLast) {
    var nameArr=firstAndLast.split(' ');
    var firstName=nameArr[0];
    var lastName=nameArr[1];
    //var fullName=firstName+" "+lastName;
  
   this.getFirstName =function() {
     return firstName;
   };
  
   this.getLastName=function(){
     return lastName;
   };
  
   this.getFullName=function(){
     return firstName+" "+lastName;
   };
  
   this.setFirstName=function(first){
     firstName=first;
   };
  
   this.setLastName=function(last){
     lastName=last;
   };
   
   this.setFullName=function(firstAndLast)
   {
     var fullName=firstAndLast.split(' ');
       firstName=fullName[0];
       lastName=fullName[1];
    // return firstName,lastName;
   };
//    return firstAndLast;
};
  
  

var bob = new Person('Bob Ross');
bob.setFullName('Bob Ross');
