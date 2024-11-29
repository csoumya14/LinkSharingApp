import { FC } from 'react';
import { StyledLabel } from './SelectPlatform.style';
import FormSelect from '../../Atoms/Form/FormSelect/FormSelect';
import { Control, FieldErrors } from 'react-hook-form';
import { LinkFieldValues } from '../../../types/formValues';

interface SelectPlatformProps {
  index: number;
  control: Control<LinkFieldValues, any>;
  errors: FieldErrors<LinkFieldValues>;
}

const platformOptions = [
  { value: 'github', label: 'GitHub', icon: 'github' },
  { value: 'frontendmentor', label: 'Frontend Mentor', icon: 'frontendmentor' },
  { value: 'twitter', label: 'Twitter', icon: 'twitter' },
  { value: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { value: 'youtube', label: 'YouTube', icon: 'youtube' },
  { value: 'facebook', label: 'Facebook', icon: 'facebook' },
  { value: 'twitch', label: 'Twitch', icon: 'twitch' },
  { value: 'devto', label: 'DevTo', icon: 'devto' },
  { value: 'codewars', label: 'CodeWars', icon: 'codewars' },
  { value: 'codepen', label: 'CodePen', icon: 'codepen' },
  { value: 'freecodecamp', label: 'FreeCodeCamp', icon: 'freecodecamp' },
  { value: 'gitlab', label: 'GitLab', icon: 'gitlab' },
  { value: 'hashnode', label: 'HashNode', icon: 'hashnode' },
  { value: 'stackoverflow', label: 'StackOverFlow', icon: 'stackoverflow' },
];
export const SelectPlatform: FC<SelectPlatformProps> = ({ index, control, errors }) => {
  return (
    <div>
      <StyledLabel>Platform</StyledLabel>
      <FormSelect
        name={`links.${index}.platform`}
        control={control}
        rules={{ required: 'Platform is required' }}
        options={platformOptions}
        isClearable
        error={errors.links?.[index]?.platform}
      />
    </div>
  );
};
