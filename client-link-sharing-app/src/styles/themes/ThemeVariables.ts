import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      purple: '#633CFF',
      lightBlue: '#BEADFF',
      lightPurple: '#EFEBFF',
      veryDarkBlue: '#333333',
      grey: '#737373',
      veryVeryLightGrey: '#EEEEEE',
      veryLightGrey: '#D9D9D9',
      offWhite: '#FAFAFA',
      White: '#FFFFFF',
      red: '#ff3939',
    },
    neutral: {
      white: 'hsl(0, 0%, 100%)',
    },
    link: {
      githubBlack: '#1a1a1a',
      frontendmentorWhite: '#ffffff',
      twitterBlue: '#43b7e9',
      linkedinBlue: '#2d68ff',
      youtubeRed: '#ee3939',
      facebookBlue: '#2442ac',
      twitchPink: '#ee3fc8',
      devtoGrey: '#333333',
      codewarsBrown: '#8a1a50',
      freecodecampViolet: '#302267',
      gitlabRed: '#eb4925',
      hashnodeBlue: '#0330d1',
      stackoverflowOrange: '#ec7100',
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
    md: '767px',
    lg: '992px',
    xlg: '1200px',
  },
};

export { myTheme };
