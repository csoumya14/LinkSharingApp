import { FC } from 'react';
import { UseFormRegister, FieldErrors, RegisterOptions, Path } from 'react-hook-form';
import { Input } from '../../Atoms/Form/Input/Input';
import { LoginFieldValues } from '../../../types/formValues';
import { StyledLabel, Wrapper } from './InputLogin.style';

interface InputLoginProps {
  label: string;
  type: string;
  name: Path<LoginFieldValues>;
  register: UseFormRegister<LoginFieldValues>;
  placeholder?: string;
  /*Record<string,any> is a utility type that describes an object with 
  string keys and values of any type */
  validationRules: RegisterOptions<LoginFieldValues>;
  errors: FieldErrors<LoginFieldValues>;
}
export const InputLogin: FC<InputLoginProps> = ({
  label,
  type = 'text',
  name,
  register,
  placeholder,
  validationRules,
  errors,
}) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <Input<LoginFieldValues>
        name={name}
        register={register}
        placeholder={placeholder}
        type={type}
        errors={errors}
        validation={validationRules}
      />
    </Wrapper>
  );
};
