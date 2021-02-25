() => {
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 계약서 같은...
  // 규약한 것을 따라야 함.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error(`Not enough coffee beans!`);
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots}shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      //   throw new Error('Not enough coffee beans!');
      // }
      // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      // return {
      //   shots,
      //   hasMilk: false,
      // };
    }
  }

  // 인터페이스를 간단하게 함수가 복잡하더라도 추상화를 통해...
  // 1. 다른 함수에 private 붙여서 정보 은닉
  // 2. interface 사용하기 - 추상화 극대화 사용 가능
  // 사용자가 편하게 이용 가능!

  //   const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  //   maker.fillCoffeeBeans(32);
  //   maker.makeCoffee(2);

  //   const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  //   // maker2.fillCoffeeBeans(32) 정의 되지 않았기에 쓸 수 없음
  //   maker2.makeCoffee(2);

  //   const maker3: CommercialCoffeeMaker= CoffeeMachine.makeMachine(32);
  //   maker3.fillCoffeeBeans(32)
  //   maker3.makeCoffee(2);
  //   maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  // 동일한 오브젝트의 인스턴스일지라도 두가지의 인터페이스를 구현하기 때문에
  // 클래스보다는 좁은 범위의 인터페이스에 규약된 것만 사용 가능
  // 얼마나 많은 함수가 있는 지 상관하지 않고 규약된 것만 이용 가능...
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
};
