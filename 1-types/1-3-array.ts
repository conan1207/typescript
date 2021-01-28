{
  // Array string[] or Array<string>
  const fruits: string[] = ['🥝', '🍓'];
  const scores: Array<number> = [12, 31, 65]; // readonly랑 같이 못 써서 일관성 위해서 string[]선호.

  // readonly string[] => 안에 들어간 인자 바꿀 수 없음 Array<string>은 사용 못 함.
  function printArray(fruits: readonly string[]) {}

  // Tuple 서로 다른 타입을 가질 수 있는 배열 🤬 인덱스만으로 타입을 판단하기 힘듦.
  // So~ interface, type alias, class로 대체해서 사용
  let student: [string, number];
  student = ['name', 367];
  student[0]; // name
  student[1]; // 367

  // 구조 분해 할당으로 명확하게 사용할 수 있으나 타입을 정해지는 곳이 아닌 사용하는 곳에서 데이터를 명명해야 하는 단점.
  const [name, age] = student;
  // Tuple을 유용하게 잘 활용한 예) const [aaa, setAaa] = useState('');
  // 동적으로 사용하고 사용자가 정의해야 한다면 Tuple.. 다른 때는 대체하는 것이 좋당!
}
