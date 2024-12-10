import { styled } from 'styled-components';

export const LinkBox = styled.div<{ $linkType: string | undefined }>`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  color: white;
  background-color: ${({ $linkType, theme }) => {
    switch ($linkType && $linkType.toLowerCase()) {
      case 'github':
        return theme.palette.link.githubBlack;
      case 'frontendmentor':
        return theme.palette.link.youtubeRed;
      case 'twitter':
        return theme.palette.link.twitterBlue;
      case 'linkedin':
        return theme.palette.link.linkedinBlue;
      case 'youtube':
        return theme.palette.link.youtubeRed;
      case 'facebook':
        return theme.palette.link.facebookBlue;
      case 'twitch':
        return theme.palette.link.twitchPink;
      case 'devto':
        return theme.palette.link.devtoGrey;
      case 'codewars':
        return theme.palette.link.codewarsBrown;
      case 'codepen':
        return theme.palette.link.devtoGrey;
      case 'freecodecamp':
        return theme.palette.link.freecodecampViolet;
      case 'gitlab':
        return theme.palette.link.gitlabRed;
      case 'hashnode':
        return theme.palette.link.hashnodeBlue;
      case 'stackoverflow':
        return theme.palette.link.stackoverflowOrange;
      default:
        return 'gray';
    }
  }};

  svg {
    fill: white;
  }
`;
