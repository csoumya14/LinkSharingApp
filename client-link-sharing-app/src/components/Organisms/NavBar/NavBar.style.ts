import { styled } from 'styled-components';
import { CustomNavLink } from '../../Molecules/CustomNavLink/CustomNavLink';

export const StyledLogo = styled.h1`
  margin: 0; /* Remove default margin */
  font-size: 0; /* Visually hide the text but keep it for accessibility */

  /* Link inside the h1 */
  a {
    display: inline-block;
    padding: 0.5rem;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledCustomNavLink = styled(CustomNavLink)`
  svg {
    position: absolute;
    left: 60%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledCustomPreviewNavLink = styled(CustomNavLink)`
  border: 1px solid ${props => props.theme.palette.primary.purple}; /* Custom focus outline */
  svg {
    position: absolute;
    left: 60%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
`;
