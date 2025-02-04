const Controller = ({ onClickButton }) => {
  return (
    <div>
      {/* 원하는 인수 넣으려면 화살표 함수 형태로 넣어야함! */}
      <button
        onClick={() => {
          onClickButton(-1);
        }}>
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}>
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}>
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(100);
        }}>
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(10);
        }}>
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(1);
        }}>
        +1
      </button>
    </div>
  );
};

export default Controller;
