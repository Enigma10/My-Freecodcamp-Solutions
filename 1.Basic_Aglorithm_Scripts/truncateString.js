function truncateString(str, num) {

    if(str.length > num && num > 3) {

        str =  str.slice(0,num - 3) + "...";

    } else if(num <= 3) {

        str =  str.slice(0,num) + "...";

    }

    return str;

}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

/*
function truncate(str, num) {

  if(num <= 3){ return str.slice(0,num) + "..."; }
  if (str.length > num) { return str.slice(0, num-3) + "..."; }
  return str;
}
*/