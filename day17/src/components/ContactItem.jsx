import { ContactDispatchContext } from '../App';
import './ContactItem.css';
import { memo, useContext } from 'react';

export default memo(function ContactItem({ id, name, email }) {
  const { onRemove } = useContext(ContactDispatchContext);

  const onClickRemove = () => {
    onRemove(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickRemove}>🗑️ Remove</button>
    </div>
  );
});
