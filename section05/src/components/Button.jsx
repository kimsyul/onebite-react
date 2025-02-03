const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  // 이벤트 핸들러로 함수 넘길때는 호출 결과가 아닌 콜백 함수 넘기는 것처럼 함수의 이름만 넘겨야 함
  return (
    <>
      <button onClick={onClickButton} style={{ color: color }}>
        {text} - {color.toUpperCase()}
        {children}
      </button>
    </>
  );
};

// 프롭스가 전달되지 않을 경우 디폴트 값 설정
Button.defaultProps = {
  color: 'black',
};

export default Button;
