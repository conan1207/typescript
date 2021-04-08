// 자바스크립트에서 this는 부른 객체에 따라 this가 결정 됨.
console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
  // arrow function은 그 당시의 context유지
  decrease = () => {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

// const 나 let으로 선언된 변수는 window에 등록된 것이 아니기에 글로벌 객체 접근 불가능
// 함수는 기본적으로 글로벌 객체로 등록 됨
// var는 예외... var는 window에 등록 됨
const caller = counter.increase;
caller(); // undefined
// 정보를 잊지 않기 위해 bind 사용
const binding = counter.increase.bind(counter);
binding();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
