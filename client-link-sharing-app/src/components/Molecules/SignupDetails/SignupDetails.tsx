import { FC } from 'react';
import { TextWrapper } from './SignupDetails.style';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { SignupFieldValues } from '../../../types/formValues';
import { InputLogin } from '../InputLogin/InputLogin';

interface SignupDetailsProps {
  errors: FieldErrors<SignupFieldValues>;
  register: UseFormRegister<SignupFieldValues>;
  watch: UseFormWatch<SignupFieldValues>;
}
export const SignupDetails: FC<SignupDetailsProps> = ({ register, errors, watch }) => {
  const password = watch('password');
  return (
    <>
      <TextWrapper>
        <InputLogin<SignupFieldValues>
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
          type="password"
          name="password"
          placeholder="Enter your password"
          register={register}
          validationRules={{
            required: "Can't be empty",
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          errors={errors}
        />
        <InputLogin
          label="Confirm password"
          type="password"
          name="confirmPassword"
          placeholder="Re enter your password"
          register={register}
          validationRules={{
            required: "Can't be empty",
            validate: value => value === password || 'Passwords do not match',
          }}
          errors={errors}
        />
      </TextWrapper>
    </>
  );
};
