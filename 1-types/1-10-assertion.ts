{
  /**
   * Type Assortions 🤬
   */
  // 예) JS함수이기 때문에 리턴 값은 모르지만 내부에서는 항상 문자열을 리턴하는 함수 있다.
  function jsStrFunc(): any {
    return 'Hello';
  }
  const result = jsStrFunc();
  // result의 결과가 string인 것을 장담하고 string APIs를 쓸 수 있음.
  // return 값을 숫자로 바꿔도 코드 작성 시점에는 에러 안 남. string이라고 장담했기 때문에!
  // But, 결과로는 undefined 뜸. 실시간으로 에러를 확인하지 못 함.
  // 100% 장담할 때만 쓰세요.
  console.log((result as string).length); // 5 === <string>result

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 🤬 에러나고 어플리케이션 종료 됨...

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers!.push(2); // 🤬 "!" 무족권 확신 해 undefined일리 없어...! css의 !important
}
