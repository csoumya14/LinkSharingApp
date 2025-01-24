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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  background-color: ${props => props.theme.palette.neutral.white};
  gap: 0.1rem;
  padding: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 1fr auto auto 1fr;
  }
`;

export const StyledCustomNavLink = styled(CustomNavLink)`
  align-self: center;
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
  border: 1px solid ${props => props.theme.palette.primary.purple};
  justify-self: end;
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
