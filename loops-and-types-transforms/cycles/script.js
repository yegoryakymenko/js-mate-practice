// task 1
for (var i = 0; i <= 50; i++) {
	console.log(i);
}
// task 2
var a = [1,2,3,4,5]
for (var i = 0; i < a.length; i++) {
	console.log(a[i]);
}
// task 3
var z = 0;
var b = [2,3,4,5];
for (var i = 0; i < b.length; i++) {
	z += b[i];
	console.log(z);
}
// task 4
var obj = {
	"Minsk": "Belarus",
	"Moscow": "Russia",
	"Kyiv": "Ukraine"
}
for (var key in obj) {
	console.log(key + " " + "-" + " " + obj[key]);
}
//task 5
var n = 1000;
while(n > 50) {
	console.log(n);
	n /= 2;

}
 var num = 5;
// task 6 
var arr = [2,5,9,10,0,4] 
for (var i = 0; i < arr.length; i++) {
	if(3 < arr[i] && arr[i] < 10) {
		console.log(arr[i]);
	} 
}
// task 7
var months = [1,2,3,4,5,6,7,8,9,10,11,12];
var month = 10;
for(var i = 0;i < months.length; i++) {
	if(months[i] == month) {
		console.log(months[i]);
	}
}