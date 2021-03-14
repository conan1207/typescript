// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

// 보통 하나의 알파벳만 이용해서 표현
// interface의 제네릭도 명시해줘야 함
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5

const best = new SimpleEither({ name: 'conan' }, 'hello');
