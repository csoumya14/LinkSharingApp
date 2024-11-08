import { FC } from 'react';
import { OptionProps } from 'react-select';
import { Container } from './CustomOption.style';
import { IconKey, iconMapping } from '../../../utils/iconMapping';

interface CustomOptionProps {
  label: string;
  icon?: React.ReactNode;
}

export const CustomOption: FC<OptionProps<CustomOptionProps, false>> = props => {
  const { data, innerRef, innerProps } = props;
  const IconComponent = iconMapping[data.icon as IconKey];

  return (
    <Container ref={innerRef} {...innerProps}>
      {IconComponent && (
        <span>
          <IconComponent />
        </span>
      )}
      <span>{data.label}</span>
    </Container>
  );
};
