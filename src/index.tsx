import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import CountFn from './practice/count';
import { darkTheme, lightTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={darkTheme}>
    <CountFn />
  </ThemeProvider>
);


