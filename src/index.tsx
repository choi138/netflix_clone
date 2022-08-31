import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import  {RecoilRoot}  from "recoil";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  
`;

=======
import { ThemeProvider } from 'styled-components';
import App from './App';
import Change from './practice/Chage';
import { theme } from './theme';

>>>>>>> b26985a (asdf)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
  <RecoilRoot> {/*중첩 라우팅 할때 사용됨*/}
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App />
  </ThemeProvider>
  </RecoilRoot>
=======
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
>>>>>>> b26985a (asdf)
);


