// 1
let a = function length(arr) {
	console.log(arr.length);
	// everything is right but get used to return a meaning not console.log it
}

let b = [1,2,3,4,5];
a(b);
// 2
function countArg() {
	console.log(arguments.length);
	// everything is right but get used to return a meaning not console.log it
}
countArg(1,2,3,4,5);
// 3
let c = function emptyElements(arr) {
	for (i = 0; i < arr.length; i ++) {
		// here better to check that it's empty or undefined
		if(arr[i] == '') {
			delete arr[i];
			// method is Array works only like this: Array.isArray(arr[i])
		} else if(arr[i].isArray) {
			return emptyElements(arr[i]);
		}
	}
	return arr;
}
// 4
let d = function reverseSort(arr) {
	console.log(arr.reverse())
	// return
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
//this should be wrapped in a function so I can call it whereever I want 

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
// your function works every 2 seconds and never stops, you should consider to stop interval if name is the right result
