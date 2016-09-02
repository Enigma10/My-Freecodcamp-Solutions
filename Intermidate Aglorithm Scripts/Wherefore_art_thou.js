
function whatIsInAName(collection, source) {
  // What's in a name?
  var check = true;

var arr = [];

for(i=0; i < collection.length; i++){ 

for (var prop in source){ 

 // alert(prop);
    if(collection[i].hasOwnProperty(prop) && collection[i][prop] == source[prop]){ 

       check = true; 
      //arr.push(collection[i]);

    } else {

        check = false; 
        break;
    }
}  
if (check === true){ 
arr.push(collection[i]);

   
}

}

return arr;

        //var arr1= arr.push(collection[keys]);
           
  // Only change code above this line

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
