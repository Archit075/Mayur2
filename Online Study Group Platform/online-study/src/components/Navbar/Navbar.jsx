import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = ({ user, onLogIn, onLogOut, onSignUp, onHome }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={onHome}>
        <img src="/logocube.png" alt="Logo" style={{ width: '30px', marginRight: '10px' }} />
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Study Group Platform
        </Typography>
        {user ? (
          <>
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              Welcome, {user.email}
            </Typography>
            <Button color="inherit" onClick={onLogOut}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={onLogIn}>
              Log In
            </Button>
            <Button color="inherit" onClick={onSignUp}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;