// App.js
import React, { useState } from 'react';
import UserContext from './userContext';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  const [user, setUser] = useState(null); // shared user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>useContext Mini Project</h1>
        <Login />
        <Profile />
      </div>
    </UserContext.Provider>
  );
};

export default App;
