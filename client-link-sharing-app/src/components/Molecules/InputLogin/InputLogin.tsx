import { UseFormRegister, FieldErrors, RegisterOptions, Path, FieldValues } from 'react-hook-form';
import { Input } from '../../Atoms/Form/Input/Input';
import { StyledLabel, Wrapper } from './InputLogin.style';

interface InputLoginProps<T extends FieldValues> {
  label: string;
  type: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  /*Record<string,any> is a utility type that describes an object with 
  string keys and values of any type */
  validationRules: RegisterOptions<T>;
  errors: FieldErrors<T>;
}
export const InputLogin = <T extends FieldValues>({
  label,
  type = 'text',
  name,
  register,
  placeholder,
  validationRules,
  errors,
}: InputLoginProps<T>) => {
  return (
    <Wrapper>
      <StyledLabel>{label}</StyledLabel>
      <Input<T>
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
