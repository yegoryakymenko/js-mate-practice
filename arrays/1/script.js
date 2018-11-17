// 1
// var string = 'aaa@bbb@ccc';
// string.replace(/@/gi, '!');

// 2
// var str = 'aaa bbb ccc';
// str.substr(4, 3);
// str.substring(4, 3);
// str.slice(4, 7);

// 3
// var date = '2025-12-31';
// console.log(date.replace(/-/gi, '/'));

// 4
// var str = 'js';
// str.toUpperCase();

// 5
// var str = 'я учу javascript!';
// str.length;

// 6
// var str = "1234567890";
// var result;
// if(str.length > 4) {
// 	result = str.slice(0, 4) + "...";
// }
// console.log(result);

// 7 
// var str = 'я учу javascript!';
// var arr = str.split(' ');
// console.log(arr);

// 8
// var arr = ['я', 'учу', 'javascript', '!'];
// var res = arr.join('+');
// console.log(res);

// 9
// function capitlizeString(word) 
// {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// 10
// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// 11

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 1, x = str.length; i < x; i++) {
   	
//     		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        
//     }

//     return str.join(" ");
// }
// console.log(capital_letter('grisha ivanov petrov'));

// 12

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 1, x = str.length; i < x; i++) {
   	
//     		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        
//     }

//     return str.join(" ").replace(/ /gi, "_");
// }
// console.log(capital_letter('grisha ivanov petrov'));

// 13

// var str = '12345678';
// function addWhitespace(str) {
//     var arr = str.split('')
//     var n = 0;
//     for (let i = arr.length - 1; i >= 0; i--) {
//       n++
//       if (n === 3) {
//         arr[i - 1] = arr[i - 1] + ' ';
//         n = 0
//       }
//     }
//     str = arr.join('')
//     return str
//   }
// console.log(addWhitespace(str))