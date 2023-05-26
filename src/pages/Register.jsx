import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import "../stylesheets/authpage.css"

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Send a request to the backend to register the user
    // const response = await axios.post('/api/register', { username, password });
    // Store the JWT in local storage or a cookie
    // localStorage.setItem('token', response.data.token);
  };

  return (
    <div>
  <Header />

      <h1 className='hd'>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p className='link-btn'>
      <Link to="/login">Already have an account? Login here.</Link>
      </p>
    </div>
  );
};

export default Register;
