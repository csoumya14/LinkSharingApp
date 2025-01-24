import { FC } from 'react';
import {
  StyledCustomNavLink,
  StyledCustomPreviewNavLink,
  StyledLogo,
  StyledNav,
} from './NavBar.style';
import { CustomNavLink } from '../../Molecules/CustomNavLink/CustomNavLink';
import { Logo } from '../../Atoms/SVGs/Logo/Logo';
import { Profile } from '../../Atoms/SVGs/Profile/Profile';
import { AddLinks } from '../../Atoms/SVGs/AddLinks/AddLinks';
import { Preview } from '../../Atoms/SVGs/Preview/Preview';
import { useLocation } from 'react-router-dom';
import { LogoLargeScreen } from '../../Atoms/SVGs/LogoLargeScreen/LogoLargeScreen';

interface NavBarProps {}
export const NavBar: FC<NavBarProps> = () => {
  const location = useLocation();
  if (location.pathname === '/preview') {
    return null;
  }
  return (
    <StyledNav>
      <StyledLogo>
        <CustomNavLink
          to="/"
          iconLarge={<LogoLargeScreen />}
          iconSmall={<Logo />}
          id="logo"
          className={({ isActive }) => (isActive ? 'active' : '')}
        />
      </StyledLogo>
      <StyledCustomNavLink
        to="/add-links"
        iconSmall={<AddLinks />}
        id="add-links-text"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Links
      </StyledCustomNavLink>
      <StyledCustomNavLink to="/profile" iconSmall={<Profile />} id="profile">
        Profile Details
      </StyledCustomNavLink>
      <StyledCustomPreviewNavLink to="/preview" iconSmall={<Preview />} id="preview">
        Preview
      </StyledCustomPreviewNavLink>
    </StyledNav>
  );
};
