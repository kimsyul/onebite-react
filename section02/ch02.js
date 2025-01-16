// 단락 평가 (Short-circuit Evaluation)
// Truthy, Falsy한 값에도 적용됨

// function returnFalse() {
//   console.log('False 함수');
//   return undefined;
// }

// function returnTrue() {
//   console.log('True 함수');
//   return true;
// }

// // returnTrue는 호출조차 되지 않음
// console.log(returnFalse() && returnTrue());

// // returnTrue 호출 됨
// console.log(returnTrue() && returnFalse());

// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name; // person이 undefined이기 때문에 person.name에 접근하지 않고 person은 undefined가 됨
  console.log(name || 'person의 값이 없음');
}

printName();
printName({ name: 'ㅇㅇ' });

// T // T -> 첫 번째가 반환
// T && T -> 두 번째가 반환
