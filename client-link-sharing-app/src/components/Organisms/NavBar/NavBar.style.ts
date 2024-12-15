import { styled } from 'styled-components';
import { CustomNavLink } from '../../Molecules/CustomNavLink/CustomNavLink';

export const StyledLogo = styled.h1`
  margin: 0; /* Remove default margin */
  font-size: 0; /* Visually hide the text but keep it for accessibility */

  /* Link inside the h1 */
  a {
    display: inline-block;
    padding: 0.6rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.typography.headingM.fontSize};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledCustomNavLink = styled(CustomNavLink)`
  svg {
    @media (max-width: ${props => props.theme.mediaSize.md}) {
      position: absolute;
      left: 60%;
      top: 60%;
      transform: translate(-80%, -90%);
    }
  }
`;

export const StyledCustomPreviewNavLink = styled(CustomNavLink)`
  border: 1px solid ${props => props.theme.palette.primary.purple}; /* Custom focus outline */
  svg {
    @media (max-width: ${props => props.theme.mediaSize.md}) {
      display: block;
      position: absolute;
      left: 60%;
      top: 60%;
      transform: translate(-50%, -50%);
    }
    display: none;
  }
`;
