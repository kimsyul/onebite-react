import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
// 리액트에서는 ESM으로 불러와도 확장자 안써도됨
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={'카페'} color={'pink'} />
      <Button text={'블로그'}>
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
