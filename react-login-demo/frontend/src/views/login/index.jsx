import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

async function loginUser(credentials) {
  const hostname = window.location.hostname;
  const parts = hostname.split('.');
  let subdomain = parts[0];
  subdomain = subdomain.replace('-3000', ''); // Remove '3000' from the subdomain
  const domain = parts.slice(1, 4).join('.');
  const formattedAddress = `https://${subdomain}-8080.${domain}/login`;

  return fetch(formattedAddress, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  .then(data => {
    if (!data.ok) {
      throw new Error('Network response was not ok');
    }
    return data.json();
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    throw error; // Re-throw to be caught by the caller
  });
}


const Login = ({ setToken, setEmail }) => {
  const [emaill, setEmaill] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!emaill || !password) {
      // Show an alert if either the email or password is missing
      const missingFields = [];
      if (!emaill) missingFields.push('email');
      if (!password) missingFields.push('password');
      setAlert({ show: true, message: `Please enter your ${missingFields.join(' and ')}.` });
      return;
    }
    // If both email and password are provided, attempt to log in
    try {
      const token = await loginUser({
        emaill,
        password,
      });
      setToken(token);
      setEmail(emaill);
      // Reset the alert state in case it was previously set
      setAlert({ show: false, message: '' });
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Login failed:', error);
      setAlert({ show: true, message: 'Login failed. Please try again.' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      {alert.show && (
        <Alert severity="error" sx={{ mb: 2, width: '100%', maxWidth: 360 }}>
          {alert.message}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={emaill}
          onChange={(e) => setEmaill(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default Login;
