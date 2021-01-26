// local scope
{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 2.3;

  // string
  const str: string = 'Hi?';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 🤬 no no~
  let age: number | undefined; // '|' optional. 아직 결정되지 않았을 때
  age = undefined;
  age = 12;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 🤬 no no~
  let person2: string | null; // 값이 비었을 때.

  // unknown 🤬 어떤 종류가 담길 지 몰라... 가능하면 쓰지 마세욧!
  let notSure: unknown = 0;
  notSure = 'she';
  notSure = true;

  // any 🤬 어떤 변수든 담을 수 있음 이것도 가능하면 쓰지 마세욧!
  let anything: any = 0;
  anything = 'Hi~';

  // void 함수에서 아무 것도 리턴하지 않다면. 생략 가능
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 🤬 변수에서 선언하는 경우 없음. undefined만 할당 가능.

  // never 절대 리턴하지 않을 거야. 리턴하지 않는 것을 명시
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; //🤬

  // object 🤬 객체 안에 무엇이든 들어갈 수 있으니 포괄적...
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'conan' });
  acceptSomeObject({ num: 2 });
}
