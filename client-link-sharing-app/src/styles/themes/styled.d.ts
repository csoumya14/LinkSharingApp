import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        purple: string;
        lightBlue: string;
        lightPurple: string;
        veryDarkBlue: string;
        grey: string;
        veryVeryLightGrey: string;
        veryLightGrey: string;
        offWhite: string;
        White: string;
        red: string;
      };
      neutral: {
        white: string;
      };
    };
    typography: {
      headingM: {
        fontSize: string;
        lineHeight: string;
      };
      headingS: {
        fontSize: string;
        lineHeight: string;
      };
      bodyM: {
        fontSize: string;
        lineHeight: string;
      };
      bodyS: {
        fontSize: string;
        lineHeight: string;
      };
    };

    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
  }
}
