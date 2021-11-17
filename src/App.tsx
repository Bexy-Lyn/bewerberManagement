import React, { FormEvent, useState } from 'react';
import * as S from './styles/layout';
import List from './components/List';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  const [modalOpen, setOpen] = useState(false);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [people, setPeople] = useState([
    { firstname: 'Default', lastname: 'Entry', status: 0, id: 0 }
  ]);

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  const clear = () => {
      setLast('');
      setFirst('');
      setOpen(false);
  }

  const addApplicant = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPeople((prev) => [
      ...prev,
      {
        firstname: first,
        lastname: last,
        status: 0,
        id: people.length
      }
    ]);
    clear()
  };

  const movePerson = (id: number) => {
    const index = people.map((person) => person.id).indexOf(id);
    let arr = people;
    if (arr[index].status < 2) arr[index].status += 1;
    setPeople([...arr]);
  };

  return (
    <S.Container>
      <S.Headline>Bewerbungsprozess</S.Headline>
      <S.Lists>
        <List
          headline={'Bewerbungen'}
          people={people.filter(
            (person) => person.id !== 0 && person.status === 0
          )}
          movePerson={movePerson}
        />
        <List
          headline={'Gespräch'}
          people={people.filter(
            (person) => person.id !== 0 && person.status === 1
          )}
          movePerson={movePerson}
        />
        <List
          headline={'Probetag'}
          people={people.filter(
            (person) => person.id !== 0 && person.status === 2
          )}
          movePerson={movePerson}
        />
      </S.Lists>
      <S.AddNew
        onClick={() => {
          setOpen(true);
        }}
      >
        Bewerber hinzufügen
      </S.AddNew>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setOpen(false)}
        contentLabel="Bewerber:in hinzufügen"
        style={modalStyles}
        id={'modal'}
      >
        <h2>Bewerber:in hinzufügen</h2>
        <form onSubmit={addApplicant}>
          <label id={'first'}>Vorname</label>
          <input
            aria-labelledby={'first'}
            type={'text'}
            onChange={(e) => setFirst(e.target.value)}
          />
          <label id={'last'}>Nachname</label>
          <input
            aria-labelledby={'last'}
            type={'text'}
            onChange={(e) => setLast(e.target.value)}
          />
          <input
            type={'submit'}
            value={'Speichern'}
            disabled={first === '' || last === ''}
          />
          <button className={'secondary'} onClick={clear}>
            Abbrechen
          </button>
        </form>
      </Modal>
    </S.Container>
  );
};

export default App;
