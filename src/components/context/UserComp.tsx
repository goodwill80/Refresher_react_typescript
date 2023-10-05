import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserComp() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext?.setUser({
      name: 'Oliver',
      email: 'oliver@email.com',
    });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User name is {userContext?.user?.email}</div>
    </div>
  );
}

export default UserComp;
