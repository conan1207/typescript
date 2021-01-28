{
  /**
   * Type Inference 타입 추론
   * 타입스크립트가 알아서 명시해주니깐 편할까?
   * 프로젝트에서는 유용하지 않다. 웬만하면 타입을 명시해 줘...!
   * 뻔한 원시타입은 생략해도 돼...
   * 함수에서는 타입 명시 해주세요~ void는 생략하더라도...
   */
  let text = 'Hello';
  text = 'Hi';
  // text = 1;

  // 인자에 타입을 명시하지 않으면 any가 할당 됨. 기본값을 적어도 추론을 함.
  function print(message = 'Hiiii') {
    console.log(message);
  }
  print('hello');
  // print(1);

  // return을 number로 추론함.
  function add(x: number, y: number) {
    return x + y;
  }
  // 함수 값이 number가 return되기에 자동으로 number로 할당.
  const result = add(3, 4);
}
