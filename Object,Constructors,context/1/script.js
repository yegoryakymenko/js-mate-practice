
// 1
var name = "Grisha";
function returnName() {
return this.name
}
var obj = {
	name: "Ivan"
}
console.log(returnName.call(obj));
console.log(returnName());
// 2
var int = 3;

var obj2 = {
	int: 5
}

function getDoubled() {
	return this.int *=2;
}

function getDoubledTrippled() {
	this.int = getDoubled.call(this);
	return this.int *= 3;
}

//console.log(getDoubledTrippled.call(obj2));
 var triple = getDoubledTrippled.bind(this);
 console.log(triple());
console.log(triple());
// 3
var popular = 0;
function City(name, population, country) {
	this.name = name;
	this.population = population;
	this.country = country;
	this.getPopulation = function() {
		return this.population;
}
	this.getCityName = function() {
	return this.name;
}
	Object.defineProperty(this, 'AREA', {
  		enumerable: true,
  		configurable: false,
  		writable: false,
  		value: 'stc'});
	this.addCitizen = function() {
	return popular += 1;
}
}

var Canadian = new City("Monreal","1250","Canda");
console.log(Canadian.addCitizen());
console.log(Canadian.AREA);	

// 4

function User(fullName) {
  this.fullName = fullName;
	Object.defineProperty(this, 'firstName', {
  		enumerable: false,
  		configurable: true,
  		writable: true
		});
	Object.defineProperty(this, 'lastName', {
  		enumerable: false,
  		configurable: true,
  		writable: true
  		});

}

var vasya = new User('Александр Пушкин');
vasya.firstName = "Sanya";
console.log(vasya.firstName);
vasya.lastName = "Pushkin";
console.log(vasya.lastName);

//5 
function Calculator(){
 	this.Calculate = function(str) {
	var result;
	var exp = str.split(' ');
	console.log(exp);
	if(exp.includes('+')) {
		return result = Number(exp[0]) + Number(exp[2]);
}	else {
		return result = Number(exp[0]) - Number(exp[2]);
}
}
}
var Jen = new Calculator;
console.log(Jen.Calculate('91 - 2'));