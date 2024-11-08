import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      purple: '#633CFF',
      lightBlue: '#BEADFF',
      lightPurple: '#EFEBFF',
      veryDarkBlue: '#333333',
      grey: '#737373',
      veryLightGrey: '#D9D9D9',
      offWhite: '#FAFAFA',
      White: '#FFFFFF',
      red: '#ff3939',
    },
    neutral: {
      white: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    headingM: {
      fontSize: '32px',
      lineHeight: '150%',
    },
    headingS: {
      fontSize: '24px',
      lineHeight: '150%',
    },
    bodyM: {
      fontSize: '16px',
      lineHeight: '150%',
    },
    bodyS: {
      fontSize: '12px',
      lineHeight: '150%',
    },
  },
  mediaSize: {
    s: '576px',
    md: '768px',
    lg: '992px',
    xlg: '1200px',
  },
};

export { myTheme };
