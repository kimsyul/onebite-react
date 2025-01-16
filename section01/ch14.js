// 스코프
// -> 전역(전체 영억) 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;
  console.log(a);

  // 함수 선언문 내부에서 선언된 함수는 지역스코프 가짐. 그 외는 전역 스코프
  function funcB() {}
}

funcA();

if (true) {
  let c = 1;
}
