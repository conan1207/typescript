interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 리턴하는 함수는 no no~
// 광범위한 함수 노 노~
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// constrain 조건을 달아...
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const conan = new FullTimeEmployee();
const doil = new PartTimeEmployee();

const conanAfterPay = pay(conan);
const doilAfterPay = pay(doil);

const obj = {
  name: 'conan',
  age: 23,
};

const obj2 = {
  animal: '🐶',
};

console.log(getValue(obj, 'name')); // conan
console.log(getValue(obj, 'age')); // 23
console.log(getValue(obj2, 'animal')); // 🐶

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
