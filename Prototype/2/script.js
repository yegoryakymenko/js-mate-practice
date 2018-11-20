// 1
var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;

animal.eat = function() {
    this.full = true;
};

rabbit.eat(); // rabbit
// 2
var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

//alert( rabbit.jumps ); // true

delete rabbit.jumps;
//alert( rabbit.jumps ); // null

delete animal.jumps;
//alert( rabbit.jumps);  // undefined
// 3
var head = {
  glasses: 1
};

var table = {
  pen: 3
  
};
table.__proto__ = head;

var bed = {
  sheet: 1,
  pillow: 2
};
bed.__proto__ = table;

var pockets = {
  money: 2000
};
pockets.__proto__ = bed;
// Разницы в поиске не будет
// 4
function Rabbit() { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype = {};

//alert(rabbit.eats);
// true

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (*)

//alert(rabbit.eats);
// false

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

// alert(rabbit.eats); // undefined
// 5
// function Rabbit() { }
// Rabbit.prototype.test = function() { alert(this); }

// var rabbit = new Rabbit();

// rabbit.test(); // IE 9+ Chrome
// rabbit.__proto__.test(); // Chrome
// Rabbit.prototype.test(); // Chrome
// Object.getPrototypeOf(rabbit).test(); // Chrome
// // 6
function Hamster() { 

	this.food = [ ]; // пустой "живот"

}
Hamster.prototype.found = function(something) {
  this.food.push(something);
};


// Создаём двух хомяков и кормим первого
let speedy = new Hamster();
let lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

// alert(speedy.food.length); // 2
// alert(lazy.food.length);   // 2 (!??)
// 7
class Person{
	constructor(legs, arms, canWalk){
		this.legs = 2;
		this.arms = 2;
		this.canWalk = true;
	}
}
class Programmer extends Person {
	constructor(canCode, isSleeps, legs, arms, canWalk){
		super();
		this.canCode = true;
		this.isSleeps = false;
	}
}
// 8 
function Adder(value) {
	this.value = value;
}
Adder.prototype.addInput = function(){
  return this.value += Number(prompt("Enter the number")); 
}
Adder.prototype.showValue = function() {
  console.log(this.value);
}
var adder = new Adder(1);
adder.addInput();
adder.addInput();
adder.showValue();
// 9 
function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
// 10
let element = document.getElementById('demo');
let text = element.innerHTML;
setInterval(function() {
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  element.innerHTML = text;
}, 100);