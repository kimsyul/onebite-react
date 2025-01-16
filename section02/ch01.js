// Truthy, Falsy한 값을 이용하면 조건문을 간결하게 만들 수 있음

// 1. Falsy한 값 (7가지)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n; // 빅인트

if (!f1) {
  console.log('Falsy');
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = 'gg';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log('Truthy');
}

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log('person의 값이 없음');
    return;
  }

  console.log(person.name);
}

let person = { name: '유재석' };
printName(person);
