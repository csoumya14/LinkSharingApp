import { FC } from 'react';
import { FieldArrayWithId } from 'react-hook-form';
import { LinkFieldValues } from '../../../types/formValues';
import { StyledContainer } from './PhonePreview.style';
import { useAppContext } from '../../../context/AppContext';
import { IllustrationPhoneMockUpp } from '../../Atoms/SVGs/IllustrationPhoneMockUpp/IllustrationPhoneMockUpp';

interface PhonePreviewProps {
  links: FieldArrayWithId<LinkFieldValues>[];
}
export const PhonePreview: FC<PhonePreviewProps> = () => {
  const { links, error } = useAppContext();
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <StyledContainer>
      <IllustrationPhoneMockUpp width="300" height="700" viewBox="0 -100 300 800" links={links} />
    </StyledContainer>
  );
};
