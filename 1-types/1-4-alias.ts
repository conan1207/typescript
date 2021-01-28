{
  /**
   * Type Aliases 새로운 타입을 정의할 수 있음.
   */
  type Text = string;
  const name: Text = 'conan'; // === const name: string

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'doil',
    age: 18,
  };

  /**
   * String Literal Types 문자열 타입을 정의할 수 있음.
   */
  type Name = 'name';
  let conanName: Name;
  conanName = 'name'; // 다른 문자열 안 됨.

  type Boal = true;
  const isCat: Boal = true;
}
