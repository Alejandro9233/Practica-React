import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home = ({ token, email }) => {
  const onButtonClick = () => {
    window.location.href = token ? '/login' : '/home';
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Adjust or remove height as needed
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the home page.
        </Typography>
        <Button sx={{ marginTop: 2 }} variant="contained" color="primary" onClick={onButtonClick}>
          {token ? 'Log out' : 'Log in'}
        </Button>
        {token && (
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Your email address is {email}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Home;
