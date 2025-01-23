// CommonJS
// const { add, sub } = require('./math');

// ESM
// 확장자도 잘 써줘야 함
// 디폴트값은 이름 바꾸는 것도 가능
import mul, { add, sub } from './math.js';
// 라이브러리에서 가져올 때는 from 다음에 라이브러리 이름만 적으면 됨
import randomColor from 'randomcolor';

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

const color = randomColor();
console.log(color);
