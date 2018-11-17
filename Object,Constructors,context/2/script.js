// 1
// function isContextEqualTo(contextLink, currentContext) {
//   console.log(contextLink === currentContext);
// }

// function Person(name, age) {
//    this.name = name;
//    this.age = age;
   
//    this.getName = function () {
//       isContextEqualTo(window, this); // true
//       isContextEqualTo(user, this); //  undefined
//       return this.name;
//    };
// }

// Person.getAge = function () {
//    isContextEqualTo(window, this); // true
//    return this.age;
// };

// var user = new Person("erer", 45);

// var getAge = Person.getAge;
// var getName = user.getName;

// console.log(getAge()); //  window
// console.log(getName()); //  undefined
// console.log(user.getName()); // window

// Person.getAge = function() {
//    isContextEqualTo(Person, this); // Person
//    return this.name;
// }

// user.getAge = getAge;
// console.log(user.getAge()); //  Person
// 2
function getName() {
  return this.name;
}
let obj = {
  name: 'Ivan',
  int: 3
}
console.log(getName.apply(obj));
// 3
let getDoubled = function() {
  return this.int * 2;
}
console.log(getDoubled.call(obj));
console.log(getDoubled.apply(obj));
let double = getDoubled.bind(obj);
console.log(double());
let getTrippled = function() {
  return double() * 3;
}
console.log(getTrippled());

function City(population, country, name) {
  let citizen = 0;
  this.population = population;
  this.country    = country;
  this.name       = name;
  this.getPopulation = function() {
    return this.population;
  }
  this.getCItyName = function() {
    return this.population;
  }
  this.addCitizen = function() {
    return citizen += 1;
  }
  Object.defineProperty(this, "AREA", {
    value: 'World',
    writable: false,
    configurable: false
  })
}
// 5
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