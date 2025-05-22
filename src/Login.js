import React, { useState, useContext } from 'react';
import userContext from './userContext';

const Login = () => {
  const [name, setName] = useState('');
  const { setUser } = useContext(userContext);

  const handleLogin = () => {
    if (name.trim() !== '') {
      setUser(name);
      setName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
