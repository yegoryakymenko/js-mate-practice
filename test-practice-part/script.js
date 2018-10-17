// 1
let a = function length(arr) {
	console.log(arr.length);
}

let b = [1,2,3,4,5];
a(b);
// 2
function countArg() {
		console.log(arguments.length);
}
countArg(1,2,3,4,5);
// 3
let c = function emptyElements(arr) {
	for (i = 0; i < arr.length; i ++) {
		if(arr[i] == '') {
			delete arr[i];
		} else if(arr[i].isArray) {
			return emptyElements(arr[i]);
		}
	}
	return arr;
}
// 4
let d = function reverseSort(arr) {
	console.log(arr.reverse())
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
	
setTimeout(function() {
	console.log(Object.keys(date).length);
}, 1000)
// 7
var check = function() {
	var value = prompt("Enter your name");
	if(value == '') {
		setInterval(function(){
			value = prompt("Again, please, enter your name");
		}, 2000)
	}else {
		alert(value);
	}
}
check();