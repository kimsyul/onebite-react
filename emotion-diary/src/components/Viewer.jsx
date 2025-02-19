import './Viewer.css';
import { getEmotionImage } from '../utils/get-emotion-image';

const Viewer = ({ emotionId, content }) => {
  return (
    <div className="Viewer">
      <section className="emotion_sectoion">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
