import React from 'react';
import Header from '../components/Header';
import Viewer from '../components/Viewer';
import Button from '../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩 중!</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  return (
    <div>
      <Header
        title={'2020-11-11 기록'}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'< 뒤로 가기'}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={'수정하기'}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
