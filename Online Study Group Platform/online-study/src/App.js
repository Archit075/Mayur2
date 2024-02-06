import React from 'react';
import HomePage from './components/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;