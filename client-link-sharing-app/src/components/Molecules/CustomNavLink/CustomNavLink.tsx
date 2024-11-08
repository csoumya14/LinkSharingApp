import { FC } from 'react';
import { StyledNavLink } from './CustomNavLink.style';
import { NavLinkProps } from 'react-router-dom';

interface CustomNavLinkProps extends NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  id: string;
}
export const CustomNavLink: FC<CustomNavLinkProps> = ({ to, children, icon, id, className }) => {
  return (
    <StyledNavLink
      to={to}
      aria-current={to === window.location.pathname ? 'page' : undefined}
      aria-labelledby={id}
      className={className}
    >
      {icon}
      <span className="visually-hidden">{children}</span>
    </StyledNavLink>
  );
};
