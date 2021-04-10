class Car {
  engine = 0;
  move() {
    const engine = this.engine + 1;
    console.log('버그다 버그야');
    console.log(engine);
  }
}

const car = new Car();
car.move();
