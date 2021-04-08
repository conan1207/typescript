// default는 import 시에 아무 이름 상관 없음
// defalut 아니면 {} 안에 넣어서 import
// 이름 변경 하고 싶으면 {a as b} 로 하면 됨...
export default function add(a, b) {
  a + b;
}

export function print() {
  console.log("print...");
}
