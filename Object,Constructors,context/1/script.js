// 1
function User(fullName) {
  this.fullName = fullName;
  let name = fullName.split(' ');
  Object.defineProperty(this, 'firstName', {
    get: function() {
      return name[0];
    },
    set: function(firstName) {
      this.fullName = firstName + ' ' + this.lastName;
    }
  });
  Object.defineProperty(this, 'lastName', {
    get: function() {
      return name[1];
    },
    set: function(lastName) {
      this.fullName = this.firstName + ' ' + lastName;
    }
  });
}

var vasya = new User('Александр Пушкин');
vasya.firstName = "Sisha";
console.log(vasya.firstName);
console.log(vasya.fullName);

// 2
function Calculator() {
  let method = {
    '+': function(a,b) {
      return a + b;
    },
    '-': function(a,b) {
      return a - b;
    }
  }

  this.addMethod = function(type, func) {
    method[type] = func;
  }
  this.calculate = function(str) {
    let arr = str.split(' ');
    a = +arr[0];
    b = +arr[2];
    operand = arr[1]
    return method[operand](a,b);
  }
};

let calc = new Calculator();
console.log(calc.calculate('1 + 2'));
var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
let result = powerCalc.calculate('20 * 3');
console.log(result);  