// 배열 메서드 2.순회와 탐색
// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 콜백함수 매개변수로 현재 요소의 값, 반복 횟수, 전체 배열의 값을 전달하게 되는 것
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 배열에 동일한 값이 있다면 앞에 있는 인덱스를 반환함
// 존재하지 않는 값을 찾을 경우에는 -1이 반환됨
let arr3 = [1, 2, 3];
let index = arr3.indexOf(1);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 첫 번째 특정 요소의 인덱스(위치)를 반환하는 메서드
// 콜백함수 만족 => 콜백함수가 참을 반환한다는 것
// 만족하는 요소가 존재하지 않는다면 -1을 반환
let arr4 = [1, 2, 3];
// 조건문을 반환하도록 하면 더 간결해짐
const findedIndx = arr4.findIndex((item) => item % 2 !== 0);

// indexOf는 얕은 비교로 동작하기 때문에 배열에 객체 타입이 저장되어 있을 경우에는 요소의 정확한 위치를 찾아낼 수 없음
// 따라서 이럴 때 findIndex를 사용해야 함
let objectArr = [{ name: '유재석' }, { name: '박명수' }];
objectArr.findIndex((item) => item.name === '유재석');

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 요소를 그대로 반환하는 메서드
const finded = objectArr.find((item) => item.name === '박명수');
console.log(finded);
