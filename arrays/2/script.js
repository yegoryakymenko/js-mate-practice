// 1

// var arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
// function addWhitespace(arr) {
//     var result = '';
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (typeof(arr[i]) == 'string') {
//         result += arr[i];
//       } else {
//         continue;
//       }
//     }
//     return result;
//   }
// console.log(addWhitespace(arr));

// 2

// function isPal(string){ 
//   var newstr;
//   var newstrarr;
//   var palidr

//   if(typeof string !== "number"){
//     newstr = string.toLowerCase();
//   }else{
//     newstr = string.toString();
//   }

//   newstrarr = newstr.split('');
//   newstr = newstr.replace(/\s/g, '');

//   newstrarr.reverse();

//   palidr = newstrarr.join('').replace(/\s/g, '')

//   if(+palidr !== NaN){
//     +palidr;
//   }

//   if(palidr === newstr){
//       return true;
//   }else{
//     return false;
//   }
// }

// 3

// function aclean(arr) {
//   var obj = {};

//   for (var i = 0; i < arr.length; i++) {
//     var sorted = arr[i].toLowerCase().split('').sort().join(''); 

//     obj[sorted] = arr[i]; 
//   }

//   var result = [];

//   for (var key in obj) result.push(obj[key]);

//   return result;
// }

// var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

// console.log( aclean(arr) );

// 4

var arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
function arrReverse(arr) {
  var result = [];
  for(i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(arrReverse(arr));