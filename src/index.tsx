import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from "recoil";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './Style/theme';
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from './Style/Style';

const clinet = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RecoilRoot> {/*중첩 라우팅 할때 사용됨*/}
    <QueryClientProvider client={clinet}> {/*react-query 사용시 필수*/}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);


