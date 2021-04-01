/**
 * Let's make a game 🕹
 */

type Direction = 'up' | 'down' | 'left' | 'right';

const position = {
  x: 0,
  y: 0,
};

function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;

    default:
      // switch 문에서 Error 제어
      // 디렉션 타입에 추가 되었는데 케이스 추가 안 했을 때
      const invalid: never = direction
      throw new Error(`unknown direction: ${invalid}`);
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
