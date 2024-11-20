import { FC } from 'react';
import { UseFormRegister, FieldErrors, RegisterOptions, Path } from 'react-hook-form';
import { Input } from '../../Atoms/Form/Input/Input';
import { ProfileFieldValues } from '../../../types/formValues';
import { StyledLabel, Wrapper } from './InputFields.style';

interface InputFieldsProps {
  label: string;
  type: string;
  name: Path<ProfileFieldValues>;
  register: UseFormRegister<ProfileFieldValues>;
  placeholder?: string;
  /*Record<string,any> is a utility type that describes an object with 
  string keys and values of any type */
  validationRules: RegisterOptions<ProfileFieldValues>;
  errors: FieldErrors<ProfileFieldValues>;
}
export const InputFields: FC<InputFieldsProps> = ({
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
      <Input<ProfileFieldValues>
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
