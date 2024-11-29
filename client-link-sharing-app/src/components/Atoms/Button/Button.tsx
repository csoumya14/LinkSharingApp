import React, { FC } from 'react';
import { StyledButton } from './Button.style';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
  ariaLabel?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  isDisabled = false,
  ariaLabel,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-disabled={isDisabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
