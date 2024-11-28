import { FC } from 'react';
import { TextWrapper } from './TextProfileDetails.style';
import { InputFields } from '../InputFields/InputFields';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ProfileFieldValues } from '../../../types/formValues';

interface TextProfileDetailProps {
  errors: FieldErrors<ProfileFieldValues>;
  register: UseFormRegister<ProfileFieldValues>;
}
export const TextProfileDetail: FC<TextProfileDetailProps> = ({ register, errors }) => {
  return (
    <TextWrapper>
      <InputFields
        label="First name*"
        type="text"
        name="firstName"
        placeholder="e.g.John"
        register={register}
        validationRules={{
          required: "Can't be empty",
        }}
        errors={errors}
      />

      <InputFields
        label="Last name*"
        type="text"
        name="lastName"
        placeholder="e.g.Appleseed"
        register={register}
        validationRules={{
          required: "Can't be empty",
        }}
        errors={errors}
      />
      <InputFields
        label="Email*"
        type="email"
        name="email"
        placeholder="e.g.email@example.com"
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
    </TextWrapper>
  );
};
