import React, { useState } from 'react';
import StudyGroupList from './StudyGroupList';
import SignUp from '../User Authentication/signup';
import LogIn from '../User Authentication/LogIn';
import LogOut from '../User Authentication/LogOut';
import NavBar from './Navbar/Navbar';
import { Container, Typography, Paper, CssBaseline, Box } from '@mui/material';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  const handleLogOut = () => {
    setUser(null);
  };

  const handleLogIn = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  };

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLogIn(false);
  };

  const handleHome = () => {
    window.location.reload();
  };

  return (
    <Container>
      <CssBaseline />
      <NavBar
        user={user}
        onLogIn={handleLogIn}
        onLogOut={handleLogOut}
        onSignUp={handleSignUp}
        onHome={handleHome}
      />
      <Box
        sx={{
          backgroundImage: `url('/image.jpg')`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,  
          width: '100%',  
        }}
      >
        <img src="/logocube.png" alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, background: 'rgba(255, 255, 255, 0.8)' }}>
          <Typography variant="h3" component="header" gutterBottom>
            Welcome to the Online Study Group Platform
          </Typography>
          <Typography variant="body1" component="main" paragraph>
            Join a study group and enhance your learning experience. Connect with peers and explore together!
          </Typography>
        </Paper>
        {user ? (
          <LogOut onLogOut={handleLogOut} />
        ) : (
          <>
            {showSignUp && <SignUp />}
            {showLogIn && <LogIn />}
          </>
        )}
      </Box>
      {user && <StudyGroupList />}
    </Container>
  );
};

export default HomePage;