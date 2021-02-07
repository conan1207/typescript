() => {
  // 객체지향적으로 커피 머신 만들기
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // 관련 있는 데이터나 함수를 묶어 둠
    // 템플릿... 청사진...

    // static을 안 붙이면, 오브젝트를 만들 때 마다 생성되어 메모리 낭비
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    //  생성자 함수는 클래스를 통해서 오브젝트로 만들 때 처음 호출되는 함수
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // class 레벨의 예 Math.random()
    // 오브젝트를 생성하지 않아도 사용 가능.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(32);
  console.log(maker);

  CoffeeMaker.makeMachine(3);
};
