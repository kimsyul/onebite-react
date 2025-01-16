// 1. 상수 객체
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

// 새로운 객체를 생성해서 할당하는 것은 불가능하지만 기존의 객체의 프로퍼티 추가, 수정, 삭제는 가능
animal.age = 2; // 추가
animal.name = '까미'; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: '윤땡땡',

  // 메서드 선언
  // 메서드는 객체의 동작을 정의하는 데 사용됨
  sayHi() {
    console.log('하이');
  },
};

person.sayHi();
person['sayHi']();
