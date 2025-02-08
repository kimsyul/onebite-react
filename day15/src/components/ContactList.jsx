import './ContactList.css';
import ContactItem from './ContactItem';

export default function ContactList({ contactList, onRemove }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contactList.map((contact) => (
        <ContactItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </div>
  );
}
