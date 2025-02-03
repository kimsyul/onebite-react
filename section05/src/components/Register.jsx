import { useState, useRef } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // state 초기값 설정할 경우 input의 value 값 설정해야 함!
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  // 레퍼런스 객체는 current 프로퍼티에 현재 보관할 값을 담아두기만 하는 단순한 객체
  // 초기값도 설정 가능
  // 값이 변경되었다고 리렌더링 시키지 않음
  // DOM을 조작하거나 컴포넌트 내부의 변수가 필요할 때 사용
  const countRef = useRef(0);
  const inputRef = useRef();

  // let count = 0;

  const onChange = (e) => {
    countRef.current++;
    // count++;
    // console.log(countRef.current);
    console.log(count);
    // 변수를 key값으로 설정할 경우 []로 묶어줘야 함!
    // 이벤트가 발생한 태그의 name 속성이 들어감
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        {/* ref에 ref객체 설정해놓으면 DOM 요소가 ref 객체에 저장됨!  */}
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={'이름'} />
      </div>

      <div>
        <input name="birth" value={input.birth} type="date" onChange={onChange} />
      </div>

      <div>
        {/* 맨 위에 있는 옵션을 초기값으로 설정함. 따라서 초기값 설정하고 싶지 않으면 빈 option 사용 */}
        <select name="country" value={input.country} onChange={onChange}>
          {/* 옵션에 보여지는 것과는 다른 value 설정 가능 */}
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
