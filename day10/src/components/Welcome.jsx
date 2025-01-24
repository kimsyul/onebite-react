const Welcome = ({ name, isMember }) => {
  return <>{isMember ? <h1>{name}님 다시 오셨군요</h1> : <h1>{name}님 가입하시겠어요?</h1>}</>;
};

Welcome.defaultProps = {
  isMember: false,
};

export default Welcome;
