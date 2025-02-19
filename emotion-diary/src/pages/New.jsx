import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Editor from '../components/Editor';

const New = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'< 뒤로 가기'}
          />
        }
      />
      <Editor />
    </div>
  );
};

export default New;
