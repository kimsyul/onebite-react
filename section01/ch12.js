// 1. 함수 표현식
// -> 호이스팅의 대상이 되지 않음
// -> 콜백함수 등에서 유용하게 활용됨

function funcA() {
  console.log('funcA');
}

let varA = funcA;

varA();

let varB = function () {
  // 익명함수
  console.log('funcB');
};

varB();

// 2. 화살표 함수
let varC = (value) => value + 1;

let varCC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varCC(20));
