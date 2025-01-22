// 비동기 작업 처리하기 2.Promise
// 자바스크립트 기본 개념 중 가장 중요함!!!!
// Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// Promise는 비동기 작업을 감싸는 객체
// Promise의 효능
// => 비동기 작업 실행, 비동기 작업 상태 관리, 비동기 작업 결과 저장, 비동기 작업 병렬 실행, 비동기 작업 다시 실행 등등
// 강의 노트!!!

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

// then 메서드
// -> 그 후에
// 비동기 작업이 성공했을 때만 호출되는 메서드
// catch 메서드
// 비동기 작업이 실패했을 때 호출되는 메서드
// 결과값이 매개변수로 전달됨

// then메서드는 프로미스 객체를 그대로 한 번 더 반환함. 그래서 then 다음에 바로 catch 메서드 사용할 수 있는 것.
// 이를 프로미스 체이닝 이라 함

// 콜백헬을 해결하기 위해 Promise 객체는 then 메서드에서 새로운 Promise 객체를 반환하도록 설정하면
// 기존 Promise가 아닌 새로운 Promise가 반환되도록 하고 있음
// 새로운 Promise가 then메서드의 결과값이 되는 것

// 중간에 어디서 오류가 발생하든 catch메서드 작동됨

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(null);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
