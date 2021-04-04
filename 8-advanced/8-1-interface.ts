// 구현 사항에 초점을 맞춤
// alias와 interface 버전업 하면서 둘이 비슷해짐.. 지금의 차이가 사라질 수도?
// interface 규격 사항 / 계약서 / 클래스나 함수? / 어떠한 것을 구현할 목적
// type은 데이터의 타입을 결정

type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object (둘 다 가능)
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 2,
};

// class (둘 다 가능)
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends (둘 다 가능)
interface ZPositionInterface extends PositionInterface {
  z: number;
} // extends 이용

type ZPositionInterType = PositionType & { z: number }; // intersection 이용

// interface만 결합 가능!
interface PositionInterface {
  z: number;
}

// Type aliases can use computed properties!
type Person = {
  name: string;
  age: number;
};

type Name = Person['name']; // string

type NumberType = number; // 새로운 타입
type Direction = 'left' | 'right'; // union 타입, interface로는 만들 수 없어욧!
