import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';

const domRoot = document.getElementById('root');

if (domRoot != null) {
  const root = ReactDOM.createRoot(domRoot);

  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
