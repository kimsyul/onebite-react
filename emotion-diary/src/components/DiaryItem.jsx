import Button from './Button';
import './DiaryItem.css';
import { getEmotionImage } from '../utils/get-emotion-image';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="DiaryItem">
      <section
        onClick={() => {
          nav(`/diary/${id}`);
        }}
        className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </section>
      <section
        onClick={() => {
          nav(`/diary/${id}`);
        }}
        className="info_section">
        <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </section>
      <section className="button_section">
        <Button
          onClick={() => {
            nav(`/edit/${id}`);
          }}
          text={'수정하기'}
        />
        <Button onClick={onClickDeleteButton} text={'삭제하기'} type={'NEGATIVE'} />
      </section>
    </div>
  );
};

export default DiaryItem;
