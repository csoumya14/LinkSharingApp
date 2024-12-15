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
          icon={<Logo />}
          id="logo"
          className={({ isActive }) => (isActive ? 'active' : '')}
        />
        devlinks
      </StyledLogo>
      <StyledCustomNavLink
        to="/add-links"
        icon={<AddLinks />}
        id="add-links-text"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Links
      </StyledCustomNavLink>
      <StyledCustomNavLink to="/profile" icon={<Profile />} id="profile">
        Profile Details
      </StyledCustomNavLink>
      <StyledCustomPreviewNavLink to="/preview" icon={<Preview />} id="preview">
        Preview
      </StyledCustomPreviewNavLink>
    </StyledNav>
  );
};
