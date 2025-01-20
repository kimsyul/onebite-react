// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

// 특정 시간을 기준으로 생성하고 싶다면 인수로 특정 날짜를 넘겨주면 됨
// , / . 으로 구분하면 됨 '2025/12/12/10:10:10'
// 문자열 아니어도 ,로 구분해서 넘겨도 됨
let date2 = new Date(2025, 12, 12, 10, 10, 40);
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 새로운 데이트 객체를 생성할 때도 사용될 수 있음
// 복잡한 형태를 가지고 있는 시간 정보를 간단하 숫자로 표현할 수 있기 때문에 개발할 때 자주 사용됨
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
// 자바스크립트의 월은 0부터 시작함
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
date1.setFullYear(2026);
date1.setMonth(2); // 3월
date1.setDate(30);

date1.setHours(22);
date1.setMinutes(1);
date1.setSeconds(20);

// 5. 시간을 여러 포맷으로 출력하기
// 날짜만 출력
console.log(date1.toDateString());
// 영어포맷이 아닌 우리나라 포맷을 출력
console.log(date1.toLocaleString());
