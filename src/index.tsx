import React from 'react';
import ReactDOM from 'react-dom/client';
import  {RecoilRoot}  from "recoil";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot> {/*중첩 라우팅 할때 사용됨*/}
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App />
  </ThemeProvider>
  </RecoilRoot>
);


