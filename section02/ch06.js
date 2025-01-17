// 반복문으로 배열과 객체 순회하기
// 순회(Iteration) : 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// 1.2. for of 반복문
// 오로지 배열을 순회하기 위해 있는 반복문
for (let item of arr) {
  //   console.log(item);
}

// 둘의 성능상의 차이 없음. 작업하기에 편한 방법 골라서 하기.

// 2. 객체 순회
let person = {
  name: '오땡땡',
  age: 27,
  hobby: '헬스',
};

// 2.1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  // value값도 순회하고 싶은 경우
  const value = person[key];
  //   console.log(key, value);
}

// 2.2. Object.values 사용
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  //   console.log(value);
}

// 2.3. for in
// 객체만을 위한 반복문
// for of와 헷갈리면 안 됨
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
