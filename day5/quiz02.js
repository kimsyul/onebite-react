/* 
[평균 성적 출력하기]
목표: 학생들의 평균 성적을 출력합니다.

다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요

- 매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.
- 반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.
  - `"{이름}: {평균}"` 형태로 출력합니다.

*/

function printAvgScore(students) {
  for (let student in students) {
    const { scores } = students[student];
    let scoreSum = 0;

    for (let score of scores) {
      scoreSum += score;
    }

    const scoreAvg = scoreSum / scores.length;

    console.log(`${student}: ${scoreAvg}`);
  }
}

printAvgScore({
  이정환: { hobby: '테니스', scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: '테니스', scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: '의적', scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
