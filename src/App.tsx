import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

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
      <Greet name="Jonathan" messageCount={10} isLoggedIn={true} />
      <Person personName={personName} />
      <PersonList nameList={nameList} />
    </>
  );
}

export default App;
