// task 1
for(var i = 0; i <= 15; i++) {
	if(i % 2 == 0) {
		console.log(i + " " + "is even number");
	} else {
		console.log(i + " " + "is odd number");
	}
}
// task 2
for(var i = 1; i <= 100; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz");
	} else if(i % 5 == 0) {
		console.log("Buzz");
	} else if(i % 3 == 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}
// task 3
function egcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}
console.log(gcd(54, 24));
// task 4
var z = 1;
for(var i = 1; i <= 1000; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		z += i;
		console.log(z);
	} 
}
// task 5
for(var i = 10; i <= 90; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		console.log(i);
	} 
}
//task 6 
for(var i = 70; i > 10; i--) {
	if(i % 2 == 1) {
		console.log(i);
	} 
}
// task 7 
for(var i = 78; i > 12; i--) {
	if(i % 2 == 0 && i % 3 == 0) {
		console.log(i);
	} 
}