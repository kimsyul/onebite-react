// 배열 메서드 1.요소 조작

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 추가된 배열의 길이를 반환함
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 맨 뒤 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 추가된 배열의 길이를 반환함
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

// shift, unshift는 push와 pop보다 느리게 동작함 (인덱스를 옮기는 절차가 있기 때문)
// 따라서 되도록이면 push나 pop으로 해결하는 것이 좋음

// 5. slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 원본 배열의 값이 달라지지는 않음
let arr5 = [1, 2, 3, 4, 5];
const sliced = arr5.slice(2, 5); // 2번 인덱스 ~ 5번 인덱스 전 (2번째 인수 생략하면 끝까지 잘라짐!)
const sliced2 = arr5.slice(2);

// 뒤에서부터 자르려면 자르고 싶은 갯수에 '-' 붙여야 함
const sliced3 = arr5.slice(-4);

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
