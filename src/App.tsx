import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Oliver',
      last: 'Ho',
    },
    {
      first: 'Jonathan',
      last: 'Ho',
    },
  ];

  return (
    <>
      {/* Typing of a REACT Component */}
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>
      {/* <Greet name="Jonathan" messageCount={10} isLoggedIn={true} /> */}
      <Greet name="Jonathan" isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList nameList={nameList} />
      <Status status="error" />
      <Input value="" handleChange={(e) => console.log(e)} />
      <Button
        handleClickEvent={(e, id) => console.log('Button clicked!', e, id)}
      />
      <Container
        styles={{ border: '1 px solid black', padding: '1rem', color: 'red' }}
      />
    </>
  );
}

export default App;
