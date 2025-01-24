const Button = ({ text, color, children }) => {
  return (
    <>
      <button style={{ color: color }}>
        {text} - {color}
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
