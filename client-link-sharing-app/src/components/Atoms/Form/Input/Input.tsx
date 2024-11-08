import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';
import { SVGLink } from '../../SVGs/SVGLink/SVGLink';
import { StyledInput, Wrapper } from './Input.style';

type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  validation?: RegisterOptions; // Validation rules passed as a prop
  error?: FieldError;
  showIcon?: boolean;
};

export const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  register,
  validation,
  error,
  showIcon,
}) => {
  return (
    <Wrapper>
      {showIcon && <SVGLink />}
      <StyledInput type={type} placeholder={placeholder} {...register(name, validation)} />
      {error && <p>{error.message}</p>}
    </Wrapper>
  );
};
