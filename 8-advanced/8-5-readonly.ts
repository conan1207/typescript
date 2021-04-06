{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 수정 가능 객체를 여기 저기 남발 하지 말자 불변성 지키기
    // todo.title = 'jaja';
    // map에 만든 다양한 유틸리티 타입들은 이미 구현 돼 있음
  }
}
