import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts';
import Login from './views/login';
import User from './views/user';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || "");
  const [email, setEmail] = useState(localStorage.getItem('email') || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  useEffect(() => {
    if (email) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  }, [email]);

  return (
    <Router>
      {!token ? (
        <Login setToken={setToken} setEmail={setEmail} />
      ) : (
        <MainLayout setToken={setToken} >
          <User email={email}/>
        </MainLayout>
      )}
    </Router>
  );
}

export default App;
