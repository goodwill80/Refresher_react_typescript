import { useState } from 'react';

// Typing of state without inference
type AuthUser = {
  name: string;
  email: string;
};

function User() {
  // Typing state of null or AuthUser
  //   const [user, setUser] = useState<AuthUser | null>(null);

  // Type Assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'jon',
      email: 'jon@mail.com',
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Login</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
}

export default User;
