import { useRef, useReducer, useCallback } from 'react';
import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';

function reducer(contactList, action) {
  switch (action.type) {
    case 'ADD':
      return [action.data, ...contactList];
    case 'REMOVE':
      return contactList.filter((contact) => contact.id !== action.targetId);
    default:
      return contactList;
  }
}

function App() {
  const [contactList, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onAdd = useCallback((contact) => {
    dispatch({
      type: 'ADD',
      data: { id: idRef.current++, name: contact.name, email: contact.email },
    });
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({
      type: 'REMOVE',
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onAdd={onAdd} />
      </section>
      <section>
        <ContactList contactList={contactList} onRemove={onRemove} />
      </section>
    </div>
  );
}

export default App;
