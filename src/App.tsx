import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

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
    </>
  );
}

export default App;
