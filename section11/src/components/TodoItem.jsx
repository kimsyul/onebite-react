import { TodoDispatchContext } from '../App';
import './TodoItem.css';
import { memo, useContext } from 'react';

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC) Higher Order Component => memo 같은 것들
// 메모 메서드는 얕은 비교를 함
// 따라서 함수 같은 객체를 프롭스로 전달 받을 경우에는 커스터마이징 해줘야 함
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 x
//   // F -> Props 바뀜 -> 리렌더링 o

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
