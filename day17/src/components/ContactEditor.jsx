import { ContactDispatchContext } from '../App';
import './ContactEditor.css';
import { useContext, useRef, useState } from 'react';

export default function ContactEditor() {
  const { onAdd } = useContext(ContactDispatchContext);
  const [contact, setContact] = useState({ name: '', email: '' });
  const nameRef = useRef();
  const emailRef = useRef();

  const onChangeContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (contact.name === '') {
      nameRef.current.focus();
      return;
    } else if (contact.email === '') {
      emailRef.current.focus();
      return;
    }

    onAdd(contact);

    setContact({ name: '', email: '' });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          name="name"
          value={contact.name}
          onChange={onChangeContact}
          onKeyDown={onKeyDown}
          className="name"
          placeholder="이름 ..."
        />
        <input
          ref={emailRef}
          name="email"
          value={contact.email}
          onChange={onChangeContact}
          onKeyDown={onKeyDown}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
