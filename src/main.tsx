import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import ThemeContextProvider from './components/context/ThemeContext.tsx';
import UserContextProvider from './components/context/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
