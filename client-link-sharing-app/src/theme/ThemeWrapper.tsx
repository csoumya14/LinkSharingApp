import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../styles/themes/ThemeVariables';
import { GlobalStyles } from '../styles/GlobalStyles';

interface Props {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
