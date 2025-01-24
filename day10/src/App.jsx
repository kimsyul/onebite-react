import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Welcome name={'김땡땡'} isMember={false} />
      <Welcome name={'임땡땡'} isMember={true} />
      <Welcome name={'이땡땡'} />
    </>
  );
}

export default App;
