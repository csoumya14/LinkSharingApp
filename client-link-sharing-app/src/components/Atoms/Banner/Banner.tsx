import React from 'react';
import { FC } from 'react';

interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  textLevel?: keyof JSX.IntrinsicElements; // More flexible, supports any HTML element
  className?: string;
  role?: string;
  ariaLabel?: string;
}
export const Banner: FC<BannerProps> = ({
  textLevel = 'p',
  role,
  ariaLabel,
  children,
  className,
  ...props
}) => {
  const BannerText = React.createElement(
    textLevel,
    { className, role, 'aria-label': ariaLabel, ...props },
    children,
  );

  return BannerText;
};
