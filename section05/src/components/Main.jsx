import './Main.css';

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.(삼항 연산자는 ok, 조건식이나 반복문은 x)
// 2. 중괄호 내부에는 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. (<>가 최상위 태그일 경우 <>는 렌더링되지 않음!)

function Main() {
  const user = {
    name: '한땡땡',
    isLogin: true,
  };

  if (user.isLogin) {
    // 자바스크립트 예약어인 class를 쓸 수 없어서 className인 것
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
}

export default Main;
