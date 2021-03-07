{
  // 숫자만 확인할 수 있음
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }

  // 타입 보장할 수 없음
  function checkNotNullAnyBad(arg: any | null) {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }

  // 보통 짧게 T... 숫자를 넣으면 숫자를 문자를 넣으면 문자를 반환하는 구나 이해할 수 있다
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('Not valid number!');
    }
    return arg;
  }

  //함수를 호출하는 순간 타입이 정의 됨
  // 사용하는 사람이 타입을 정할 수 있고 유연하지만 타입을 보장 받을 수 있음
  const number = checkNotNull(123);
  // 에러 남 const boal:string = checkNotNull(true)
  const boal: boolean = checkNotNull(true);
}
