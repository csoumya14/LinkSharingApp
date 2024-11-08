import { FC } from 'react';
import { StyledLabel } from './SelectPlatform.style';
import FormSelect from '../../Atoms/Form/FormSelect/FormSelect';
import { Control, FieldErrors } from 'react-hook-form';
import { Github } from '../../Atoms/SVGs/Github/Github';
import { FrontendMentor } from '../../Atoms/SVGs/FrontendMentor/FrontendMentor';
import { Twitter } from '../../Atoms/SVGs/Twitter/Twitter';
import { LinkedIn } from '../../Atoms/SVGs/LinkedIn/LinkedIn';
import { YouTube } from '../../Atoms/SVGs/Youtube/Youtube';
import { Facebook } from '../../Atoms/SVGs/Facebook/Facebook';
import { Twitch } from '../../Atoms/SVGs/Twitch/Twitch';
import { DevTo } from '../../Atoms/SVGs/DevTo/DevTo';
import { CodeWars } from '../../Atoms/SVGs/CodeWars/CodeWars';
import { CodePen } from '../../Atoms/SVGs/CodePen/CodePen';
import { Freecodecamp } from '../../Atoms/SVGs/Freecodecamp/Freecodecamp';
import { Gitlab } from '../../Atoms/SVGs/Gitlab/Gitlab';
import { Hashnode } from '../../Atoms/SVGs/Hashnode/Hashnode';
import { Stackoverflow } from '../../Atoms/SVGs/Stackoverflow/Stackoverflow';
import { CustomOption } from '../CustomOption/CustomOption';
import { FormValues } from '../../../types/formValues';

interface SelectPlatformProps {
  index: number;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
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
        components={{ Option: CustomOption }}
        isClearable
        error={errors.links?.[index]?.platform}
      />
    </div>
  );
};
