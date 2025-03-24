import { UseFormRegister, FieldErrors, Path, FieldValues } from 'react-hook-form';
import { SVGLink } from '../../SVGs/SVGLink/SVGLink';
import { StyledErrorMessage, StyledInput, Wrapper } from './Input.style';
import { ProfileFieldValues } from '../../../../types/formValues';

interface InputProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  type: string;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  validation?: Record<string, any>; // Validation rules passed as a prop
  errors?: FieldErrors<ProfileFieldValues>;
  showIcon?: boolean;
  IconComponent?: React.FC;
}

export const Input = <TFieldValues extends Record<string, any>>({
  name,
  type,
  placeholder,
  register,
  validation,
  errors,
  showIcon,
  IconComponent,
}: InputProps<TFieldValues>) => {
  const errorMessage = errors && (errors as any)[name]?.message?.toString(); // Cast to any to access nested error
  return (
    <Wrapper>
      {showIcon && IconComponent && <IconComponent />}
      <StyledInput
        type={type}
        $iconpresent={showIcon}
        placeholder={placeholder}
        $errorpresent={!!errorMessage}
        {...register(name, validation)}
      />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </Wrapper>
  );
};
