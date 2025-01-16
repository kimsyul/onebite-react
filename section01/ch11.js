// 함수선언

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 40);
console.log(area2);

function getArea(width, height) {
  let area = width * height;

  // 중첩함수
  function another() {
    console.log('another');
  }

  another();

  return area; // 반환값
}

// 호이스팅
// -> 끌어올리다 라는 뜻
