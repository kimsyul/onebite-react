import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getStringedDate } from '../utils/get-stringed-date';

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({ createdDate: new Date(), emotioId: 3, content: '' });

  const stringedDate = getStringedDate(input.createdDate);

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" value={stringedDate} />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          <EmotionItem emotioId={1} />
          <EmotionItem emotioId={2} />
          <EmotionItem emotioId={3} />
          <EmotionItem emotioId={4} />
          <EmotionItem emotioId={5} />
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea value={input.content} />
      </section>
      <section className="button_section">
        <Button
          onClick={() => {
            nav('/', { replace: true });
          }}
          text={'취소하기'}
        />
        <Button onClick={onSubmit} text={'작성 완료'} type={'POSITIVE'} />
      </section>
    </div>
  );
};

export default Editor;
