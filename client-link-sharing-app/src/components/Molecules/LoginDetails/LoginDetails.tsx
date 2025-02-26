import { FC } from 'react';
import { TextWrapper } from './LoginDetails.style';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { LoginFieldValues } from '../../../types/formValues';
import { InputLogin } from '../InputLogin/InputLogin';
import { ButtonSave } from '../ButtonSave/ButtonSave';

interface LoginDetailsProps {
  errors: FieldErrors<LoginFieldValues>;
  register: UseFormRegister<LoginFieldValues>;
}
export const LoginDetails: FC<LoginDetailsProps> = ({ register, errors }) => {
  return (
    <>
      <TextWrapper>
        <InputLogin
          label="Email address"
          type="email"
          name="email"
          placeholder="e.g. alex@email.com"
          errors={errors}
          register={register}
          validationRules={{
            required: "Can't be empty",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <InputLogin
          label="Password"
          type="text"
          name="password"
          placeholder="Enter your password"
          register={register}
          validationRules={{
            required: "Can't be empty",
          }}
          errors={errors}
        />
      </TextWrapper>
    </>
  );
};
