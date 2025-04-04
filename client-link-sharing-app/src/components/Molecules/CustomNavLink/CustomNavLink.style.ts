import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)<{ islogin: boolean }>`
  color: ${({ islogin, theme }) =>
    islogin ? theme.palette.primary.purple : theme.palette.primary.veryDarkBlue};
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  &:focus {
    outline: 3px dashed ${props => props.theme.palette.primary.veryDarkBlue}; /* Custom focus outline */
  }

  &.active {
    color: ${({ islogin, theme }) =>
      islogin ? theme.palette.primary.purple : theme.palette.primary.veryDarkBlue};
    background: ${({ islogin, theme }) =>
      islogin ? 'transparent' : theme.palette.primary.lightPurple};
  }

  &:hover {
    color: ${props => props.theme.palette.primary.purple};
  }
  font-size: ${({ islogin }) => (islogin ? '16px' : '0px')};
  width: ${({ islogin }) => (islogin ? 'fit-content' : '60px')};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: 16px;
    padding: 1rem;
    width: fit-content;
  }
`;
