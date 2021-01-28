{
  /**
   * Enum 여러가지 관련된 상수 값을 한 곳에 모아 정의
   */
  // Js에는 없기 때문에 Ts에서 자체적으로 제공함.
  // JavaScript 한 번 정해지면 절대 변하지 않는 특정 고정값. 전부 대문자로 표현
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  // 서로 연관되어 있는 상수지만 한 데로 묶을 수 없었음.
  const MONDAY = 0;
  const TUESDAY = 0;
  const WEDNESDAY = 0;
  // enum 과 비슷하게 만들기 위해서
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript enum 첫 글자만 대문자로~
  enum Days {
    Monday, // 따로 값을 정하지 않는다면, 0 'Monday = 1' 커스텀 가능. 문자열은 수동으로 하나하나 다 할당해줘야 함.
    Tuesday, // 1
    wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  // Enum 다른 언어에서는 유용하나... TS에서는 권장하지 않음🤬
  console.log(Days.Thursday); // 3
  let day: Days = Days.Friday;
  day = 10; // 어떠한 값을 할당해도 에러 안 남. 타입이 정확하게 보장되지 않음.
  console.log(day); // 4

  // enum 대신에 union으로 거의 대체 가능
  type UnionDays = 'Monday' | 'Tuesday' | 'Wednesday';
  let unionDays: UnionDays = 'Monday';
  // unionDays = 1 하면 에러 남.

  // 거의 대체 가능하지만 모바일 클라이언트 안드로이드, IOS는 코틀린이나 스위프트 언어를 이용
  // 사용자 데이터 제이슨로 묶어 다른 클라이언트로 보내야 할 때.
  // 모바일 클라이언트 언어에는 union을 표현하는 방법이 없음.
  // 서로 이해할 수 있는 enum을 사용.
}
