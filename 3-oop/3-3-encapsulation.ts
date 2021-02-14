() => {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 외부에 노출해도 되는 것은 무엇인 지 설계 전 고민 필요...
  // 외부에서 설정하면 안 되는 것을 캡슐화 시킴 ex) coffee beans
  // public (외부에서 접근 가능) - 기본 설정
  // private - 외부에서 접근 불가능
  // protected - 외부에서 접근 불가능하지만 해당 클래스를 상속한 자식은 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // 보통 오브젝트를 만들 수 있는 static 함수가 있으면 생성자 함수를 private
    // static 함수만 이용해서 오브젝트를 만들 수 있게
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // public 함수를 통해 private 상태를 바꿈
    // 유효성을 따지기 때문에 안정성을 높임
    // 명시되지 않았다면, 다 public
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
    // === constructor(private firstName: string, private lastName: string) {}
  }

  class User2 {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    // 다양한 연산, 유효성 검사
    set age(num: number) {
      if (num < 0) {
        throw new Error('no no');
      }
      this.internalAge = num;
    }
    constructor(public firstName: string, private lastName: string) {}
  }

  const user = new User('conan', 'doil');
  console.log(user.fullName); // conan doil
  user.firstName = 'sohee';
  // conan doil - 이미 할당 됐기에 변하지 않음
  // getter / setter 함수 사용하기...
  console.log(user.fullName);

  const user2 = new User2('conan', 'doil');
  console.log(user2.fullName); // conan doil
  user2.firstName = 'sohee';
  console.log(user2.fullName); // sohee doil
  user2.age = 6;
};
