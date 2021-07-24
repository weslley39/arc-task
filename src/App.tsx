import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './pages';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';

const Content = styled.div`
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin:0;
    min-height: 100vh;
  }
`;


const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Content>
        <Router />
      </Content>
    </ThemeProvider>
  );
};

export default App;