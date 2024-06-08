import React, { useState } from 'react';
import './SecondPage.css';

function SecondPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Johan' && password === 'Johan') {
      setMessage('Login successful!');
      setIsSuccess(true);
    } else {
      setMessage('Incorrect username or password. \n Try Johan');
      setIsSuccess(false);
    }
  };

  return (
    <div className="second-page-container">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {message && (
          <p className={`message ${isSuccess ? 'success' : ''}`}>{message}</p>
        )}
      </div>
    </div>
  );
}

export default SecondPage;
