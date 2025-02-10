import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';
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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

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

  const memoizedDispatchContext = useMemo(() => {
    return { onAdd, onRemove };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contactList}>
        <ContactDispatchContext.Provider value={memoizedDispatchContext}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
