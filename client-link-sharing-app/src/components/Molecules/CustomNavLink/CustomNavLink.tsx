import React, { FC } from 'react';
import { StyledNavLink } from './CustomNavLink.style';
import { NavLinkProps } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

interface CustomNavLinkProps extends NavLinkProps {
  to: string;
  children?: React.ReactNode;
  iconSmall?: React.ReactNode;
  iconLarge?: React.ReactNode;
  id: string;
}
export const CustomNavLink: FC<CustomNavLinkProps> = ({
  to,
  children,
  iconSmall,
  iconLarge,
  id,
  className,
}) => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });
  console.log({ to });
  const isLogin = to === '/login' || to === '/signup';
  return (
    <StyledNavLink
      to={to}
      aria-current={to === window.location.pathname ? 'page' : undefined}
      islogin={isLogin}
      aria-labelledby={id}
      className={className}
    >
      {isLargeScreen && iconLarge ? iconLarge : iconSmall}
      <span>{children}</span>
    </StyledNavLink>
  );
};
