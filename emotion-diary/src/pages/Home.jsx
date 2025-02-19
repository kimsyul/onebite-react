import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { DiaryStateContext } from '../App';
import { useContext, useState } from 'react';

const getMonthlyData = (pivotDate, data) => {
  // TODO
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+,)
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
        rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
      />
      <DiaryList data={data} />
    </div>
  );
};

export default Home;
