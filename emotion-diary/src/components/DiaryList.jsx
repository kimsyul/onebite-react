import Button from './Button';
import DiaryItem from './DiaryItem';
import './DiaryList.css';
import { useNavigate } from 'react-router-dom';

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryList">
      <section className="menu_bar">
        <select>
          <option>최신순</option>
          <option>오래된순</option>
        </select>
        <Button
          onClick={() => {
            nav('/new');
          }}
          text={'새 일기 쓰기'}
          type={'POSITIVE'}
        />
      </section>
      <section>
        {data.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
};

export default DiaryList;
