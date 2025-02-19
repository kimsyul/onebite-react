import './EmotionItem.css';
import { getEmotionImage } from '../utils/get-emotion-image';

const EmotionItem = ({ emotioId, emotionName }) => {
  return (
    <div className={`EmotionItem`}>
      <img src={getEmotionImage(emotioId)} className="emotion_img" />
      <div>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
