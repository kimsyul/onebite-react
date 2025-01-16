// 1. 객체 생성

let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key: value
// 프로퍼티 갯수 제한 없음
// value의 타입도 제한 없음
// key 값은 문자열이나 숫자만 이용 가능 (문자열 따옴표 필요 없지만 띄어쓰기가 필요한 문자열은 따옴표로 감싸야 함)
let person = {
  name: '최땡땡',
  age: 27,
  hobby: '테니스',
  job: 'FE Developer',
  'dog name': 'mimi',
  10: 20,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// 존재하지 않는 것에 대해서 접근하려 하면 undefined이 반환됨

// 간결하기 때문에 점 표기법을 사용하는 것이 보편적으로 좋음
let name = person.name;

// 대괄호 표기법 사용할 때는 키를 따옴표로 감싸야 함. 감싸지 않으면 변수로 인식해서 오류 발생함
let age = person['age'];

// 이런식으로 사용 가능하기 때문에 동적으로 프로퍼티를 변화시키면서 꺼내와야 하는 경우에는 괄호 표기법을 사용하는 것이 좋음
let property = 'hobby';
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.favoriteMusic = 'aaa';
person['favoriteFood'] = '떡볶이';

// 3.3 프로퍼티를 수정하는 방법
person.job = 'educator';
person['age'] = 28;

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person['favoriteFood'];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = 'name' in person;
let result2 = 'job' in person;

console.log(result1, result2);
