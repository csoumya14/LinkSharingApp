import { FC } from 'react';
import { SingleValueProps } from 'react-select';
import { IconKey, iconMapping } from '../../../utils/iconMapping';
import { Container } from './CustomSingleValue.style';

interface CustomOptionProps {
  label: string;
  icon?: React.ReactNode;
}

export const CustomSingleValue: FC<SingleValueProps<CustomOptionProps, false>> = props => {
  const { data } = props;
  const IconComponent = iconMapping[data.icon as IconKey];

  return (
    <Container>
      {IconComponent && (
        <span>
          <IconComponent />
        </span>
      )}
      <span>{data.label}</span>
    </Container>
  );
};
