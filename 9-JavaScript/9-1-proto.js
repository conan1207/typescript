const x = {};
const y = {};

// 자바스크립트의 모든 object는 Object라는 proto를 상속한다.
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true;

// 자바스크립트의 모든 array는 Array라는 proto를 상속한다. Array API를 다 사용할 수 있음.
// Array proto는 Object를 상속한다.
// prototype을 이용하여 상속하고 코드를 재사용함...
const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  //   this.makeCoffee = (shots) => {
  //     console.log("making...");
  //   };
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
