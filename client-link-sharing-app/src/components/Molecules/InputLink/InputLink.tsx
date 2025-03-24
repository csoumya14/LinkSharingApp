import { FC } from 'react';
import { StyledLabel } from './InputLink.style';
import { Input } from '../../Atoms/Form/Input/Input';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { LinkFieldValues } from '../../../types/formValues';
import { validationPatterns } from '../../../utils/validationPattern';
import { SVGLink } from '../../Atoms/SVGs/SVGLink/SVGLink';

interface InputLinkProps {
  errors: FieldErrors<LinkFieldValues>;
  register: UseFormRegister<LinkFieldValues>;
  getValues: (name: string) => any;
  index: number;
}
export const InputLink: FC<InputLinkProps> = ({ index, register, errors, getValues }) => {
  return (
    <div>
      <StyledLabel>Link</StyledLabel>
      <Input<LinkFieldValues>
        name={`links.${index}.link`}
        register={register}
        type="url"
        showIcon={true}
        IconComponent={SVGLink}
        errors={errors}
        validation={{
          required: 'Link is required',
          validate: (value: string) => {
            const platform = getValues(`links.${index}.platform.value`); // Get selected platform value
            const pattern = validationPatterns[platform];
            return pattern ? pattern.test(value) || 'Invalid URL format' : true;
          },
        }}
      />
      {/* {errors.links?.[index]?.link && <p>{errors.links[index].link?.message}</p>} */}
    </div>
  );
};
