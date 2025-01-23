// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// math 모듈을 대표하는 단 하나의 기본값
export default function multiply(a, b) {
  return a * b;
}

// CommonJS
// module.exports = {
//   add,
//   sub,
// };

// ESM
// export { add, sub };
