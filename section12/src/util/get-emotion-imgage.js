// 사진을 assects 폴더에 넣어야 vite가 이미지를 최적화 함
// 이미지가 많은 경우에는 public 폴더에 넣는게 좋을 수 있음
import emotion1 from './../assets/emotion1.png';
import emotion2 from './../assets/emotion2.png';
import emotion3 from './../assets/emotion3.png';
import emotion4 from './../assets/emotion4.png';
import emotion5 from './../assets/emotion5.png';

//public 폴더
// <img src={'/emotion1.png'} />

// assets 폴더
// <img src={getEmotionImage(1)} />

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
