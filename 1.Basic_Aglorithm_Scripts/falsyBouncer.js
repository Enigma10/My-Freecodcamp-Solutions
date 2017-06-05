function bouncer(arr) {
return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


//Boolen object will return true for 7,9 , ate.
//But it will return false for null,0,false,NaN,underfined.kindly for falsey value.
