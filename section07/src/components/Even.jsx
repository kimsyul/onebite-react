import { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 => useEffect가 끝날 때 실행됨 (즉, 이 상황에서는 unmount 됐을 때)
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>Even</div>;
};

export default Even;
