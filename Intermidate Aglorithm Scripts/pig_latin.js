
function translatePigLatin(str) {
 var regex=/[aeiou]/gi;
if(str[0].match(regex)){
//  alert(str[0].match(regex));
 return str+'way';
}
var vowel_ind_po=str.indexOf(str.match(regex)[0]);
return str.substr(vowel_ind_po) + str.substr(0, vowel_ind_po) + 'ay';
}
translatePigLatin("consonant");
