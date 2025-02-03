import './App.css';
// 리액트에서는 ESM으로 불러와도 확장자 안써도됨
import Register from './components/Register';

// 리렌더링 되는 경우
// 1. state
// 2. props
// 3. 부모 컴포넌트 => 따라서 한 컴포넌트에서 관련없는 여러개의 state를 몰아넣는 것보다 다른 컴포넌트로 분리시키는 것이 성능에 좋음

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
