// 단일 연결 리스트 사용...
// 1. 규격 정하기
interface Stack {
  readonly size: number; // 밖에서 변경 못 하고 내부에서 정의
  push(value: string): void;
  pop(): string;
}

// readonly 사용자가 입력한 정보를 한 단계 감쌀 경우 불변성을 유지 시켜주는 것이 좋다
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

// implments 사용하면 보통 클래스명에 'Impl'을 붙임
class StackImpl implements Stack {
  // 외부에서는 size를 읽을 수만 있고(setter가 없기에) 내부에서 수정 가능한
  // 외부에서 쓰는 것과 내부에서 쓰는 것이 동일한 경우에는 '_' 사용
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!');
    }

    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error('Stack is empty!');
    }

    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('conan1');
stack.push('conan2');
stack.push('conan3');

while (stack.size !== 0) {
  console.log(stack.pop());
}
