import './App.css';
import { useRef, useReducer, useCallback } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
// import Exam from './components/Exam';

// 상태가 지금처럼 복잡한 경우에는 useReducer, 상태값이 단순한 경우에는 useState 사용해도 충분
const mockData = [
  { id: 0, isDone: false, content: 'React', date: new Date().getTime() },
  { id: 1, isDone: false, content: '빨래하기', date: new Date().getTime() },
  { id: 2, isDone: false, content: '독서하기;', date: new Date().getTime() },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: { id: idRef.current++, isDone: false, content: content, date: new Date().getTime() },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({ type: 'DELETE', targetId: targetId });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      {/* <Exam /> */}
    </div>
  );
}

export default App;
