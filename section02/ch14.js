// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '이땡땡',
        id: 'lee',
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// async와 await을 사용하면 then 메서드를 복잡하게 사용할 필요 없음

async function printData() {
  // 비동기 작업의 결과값이 data에 할당됨
  const data = await getData();
  console.log(data);
}

printData();
