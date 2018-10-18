// 1
myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func(); // "undefined" and "local"
/*
Во время объявления переменной через var, она всплывает вверх
и со значением undefined. Объявление внутри блока
через ключевое слово, делает привязку к этому самому блоку.
В данном случае мы инициализировали переменную внутри функции, и она 
всплыла со значением undefined.
*/
// 2 
var a = 90100;
function someFunc(){
  if(false){
    var a = 1;
  } else {
    var b = 2;
  }
  console.log(b); // 2
  console.log(a); // undefined
}
someFunc();
/*
Scope создаются при вызове функций, либо же он может быть глобальным.
При декларировании переменной просиходит hoisting. В данном примере
у нас всплывает переменная, объявленая в блоке if, даже,
если не сработало условие логического оператора if.
*/
// 3
//a(); //ok
//b(); //error

// var b = function(){
//  alert( 'function b');
// }

// function a(){
//  alert( 'function a' );
// }
/*
Есть два варианта объявления функции:
Functional Expression
	var b = function(){
	 alert( 'function b');
	}
Functional Declaration
	function a(){
	 alert( 'function a' );
	}
Их отличие в том что функциональное выражение всплывает но,
не сохраняет значение функции, в итоге данная функция
всплывает как обычная переменная
а функциональное объявление всплывает как обычная функция. 
В итоге получается, 
если мы хотим вызвать функцию типа b(); , до её явного объявления
мы получим ошибку в виде того, что то что мы пытаемся вызвать,
функцией не ялвяется.
*/
// 4
var i = 0;

for (; i< 10; i ++) {
  console.log(i)
}
/* Начало в цикле for является не обязательным. В данном случае
мы объявили переменную i до самого цикла, а так как она у нас есть
цикл дальше отрабатывает соотвественно условию.
*/
// 5
var z = function(a){
	var fact = 1;
	for(a; a > 0; a--){
		fact *= a;
		if(fact % 2 == 0){
			fact *= 2;
		}
	}
	return fact;
}
console.log(z(5));
// 6
var t0 = performance.now();
function doSomething(){
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
	console.log("THis is done");
}
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
// 7
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());
// 8
function unique(arr,arr2,arr3) {
	var uniqueArr = [];
	for(i = 0; i < arr.length; i++) {
		if(!uniqueArr.includes(arr[i])) {
			uniqueArr.push(arr[i]);
		}
	}
	for(i = 0; i < arr2.length; i++) {
		if(!uniqueArr.includes(arr2[i])) {
			uniqueArr.push(arr2[i]);
		}
	}
	for(i = 0; i < arr3.length; i++) {
		if(!uniqueArr.includes(arr3[i])) {
			uniqueArr.push(arr3[i]);
		}
	}
	return uniqueArr;
}
console.log(unique([1, 2, 3], [101, 2, 1, 10], [2, 1]));
// 9 
