// 1. 배열 생성
// 배열 안에는 어떤 타입의 값이든 자유롭게 넣을 수 있음
// 길이의 제한도 없음

let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, true, 'hi', null, undefined, () => {}, {}, []];

console.log(arrC);

// 2. 배열 요소 접근
// 인덱스는 0번부터 시작함

let item1 = arrC[0];

arrC[0] = 'nice';

console.log(arrC);
