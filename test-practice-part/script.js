// 1
let a = function length(arr) {
	return arr.length;
}

let b = [1,2,3,4,5];
a(b);
// 2
function countArg() {
		return arguments.length;
}
countArg(1,2,3,4,5);
// 3
let c = function emptyElements(arr) {
	for (i = 0; i < arr.length; i ++) {
		if(!Array.isArray(arr[i])) {
			delete arr[i];
		} else if(Array.isArray(arr[i])) {
			return emptyElements(arr[i]);
		}
	}
	return arr;
}
// 4
let d = function reverseSort(arr) {
	return arr.reverse();
}
// 5
var date = new Date();
console.log(date);
let e = function dateObject(date) {
	var dateObj;
	if(date instanceof Date && !isNaN(date.valueOf())) {
		return dateObj = {
			day: date.getDate(),
			month: date.getMonth() + 1,
			year: date.getFullYear()
		}
	}
	return dateObj;
}
console.log(e(date));
// 6
	
var time = function(){
	setTimeout(function() {
		return Object.keys(date).length;
}, 1000)}
time();
// 7
var check = function() {
	var value = prompt("Enter your name", "");
	if(!value) {
		var int = setInterval(function() {
			value = prompt("Please, enter your name", "");
			if(value) {
				clearInterval(int);
			}
		}, 2000)
	}else {
		return;
	}
}
check();