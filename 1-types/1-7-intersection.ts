{
  /**
   * Intersection Types: &🙆🏻‍♀️ 이거나 저거~
   * 다양한 타입을 하나로 묶어서 사용 가능 But 모든 속성이 들어가야 함
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }
}

internWork({
  name: 'conan',
  score: 20,
  employeeId: 1,
  work: () => {},
});
