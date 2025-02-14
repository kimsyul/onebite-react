import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext } from 'react';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const getCurrentDiaryItem = () => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }

    return currentDiaryItem;
  };

  const currentDiaryItem = getCurrentDiaryItem();
  console.log(currentDiaryItem);

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={<Button onClick={onClickDelete} text={'삭제하기'} type={'NEGATIVE'} />}
      />
      <Editor />
    </div>
  );
};

export default Edit;
