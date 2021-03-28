// 코드에디터 내에서 ctrl 을 누르고 문서 확인
Array;
[1, 2].map;

type Student = {
  passed: boolean;
};

const student: Student[] = [{ passed: true }, { passed: true }, { passed: false }];
const result = student.every((student) => student.passed); // === student => { return student.passed }
console.log(result); // 하나라도 false면 false 나옴

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = true;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat)); // 특정한 타입만 있는 지 확인할 수 있음
// .some 은 하나만 true여도 true를 리턴함...
