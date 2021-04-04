{
  // 기존의 타입을 이용하면서 형태, 성질을 변경 하는 것
  // 재사용성을 높여줌
  type Video = {
    title: string;
    author: string;
  };

  // [1, 2].map(item => item * item) [1, 4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; //타입 객체 정의 안에 인덱스 기호를 쓰면 같은 효과 for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  // type VideoOptional = {
  //     title?:string
  //     author?:string
  // }
  const videoOp: VideoOptional = {
    title: 'Harry Potter',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'cat';

  const video: ReadOnly<Video> = {
    title: 'conan',
    author: 'doil',
  };
  // video.title = 'gosho' 오류...

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
