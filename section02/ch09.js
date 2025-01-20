// 배열 메서드 3. 변형
// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을(콜백함수) 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 개발할 때 특정 조건에 의해서 검색시키는 기능이나 카테고리별 필터 기능을 만드는데 필수적으로 사용됨
let arr1 = [
  { name: '유재석', hobby: '독서' },
  { name: '박명수', hobby: '여행' },
  { name: '노홍철', hobby: '여행' },
];

const travelPeople = arr1.filter((item) => item.hobby === '여행');
console.log(travelPeople);

// 2. map
// 정말 자주 활용되는 메서드
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 숫자로 이루어진 배열에는 정상적으로 동작하지 않음 (사전순으로 정렬하기 때문에)
// 숫자의 대소관계를 기준으로 정렬하고 싶다면 메서드에 비교 기준을 설정하는 콜백함수 넘겨주면 됨
let arr3 = [10, 3, 4];

// 오름차순 예시
arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    // sort 함수에서 양수를 반환하면 둘 중에 더 작은 값이 앞으로 오도록 설정됨
    return 1; // -> b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리를 그대로 유지
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 원본 배열은 그대로 두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['c', 'a', 'b'];
const sorted = arr5.toSorted();
console.log(arr5, sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
// 구분자 디폴트는 ',', 구분자 바꾸고 싶으면 인수로 넘겨주기
let arr6 = ['i', 'am', 'dev'];
const joined = arr6.join(' ');

console.log(arr6, joined);
