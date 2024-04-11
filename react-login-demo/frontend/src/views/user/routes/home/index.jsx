import React, { useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = ({ email }) => {
  // Memoize the calculation of the username based on the email
  const username = useMemo(() => email ? email.split('@')[0] : "", [email]);

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Hi, Welcome {username} !!
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the home page.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
