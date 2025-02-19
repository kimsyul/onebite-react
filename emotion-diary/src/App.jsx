import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';
import { createContext, useReducer, useRef } from 'react';

const mockData = [
  { id: 1, createdDate: new Date().getTime(), emotionId: 1, content: '!!' },
  { id: 2, createdDate: new Date().getTime(), emotionId: 3, content: '!!' },
  { id: 2, createdDate: new Date('2024-12-12').getTime(), emotionId: 3, content: '!!' },
];

function reducer(state, action) {
  switch (state) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(0);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
