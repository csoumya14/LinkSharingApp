import { FC } from 'react';
import { FieldArrayWithId } from 'react-hook-form';
import { LinkFieldValues } from '../../../types/formValues';
import { StyledContainer } from './PhonePreview.style';
import { useAppContext } from '../../../context/AppContext';
import { IllustrationPhoneMockUpp } from '../../Atoms/SVGs/IllustrationPhoneMockUpp/IllustrationPhoneMockUpp';

interface PhonePreviewProps {
  selectedLinks?: FieldArrayWithId<LinkFieldValues>[];
  profileImage?: FileList;
  firstName?: string;
  lastName?: string;
  email?: string;
}
export const PhonePreview: FC<PhonePreviewProps> = ({
  selectedLinks,
  profileImage,
  firstName,
  lastName,
  email,
}) => {
  const { links: backendLinks, profile, error } = useAppContext();

  if (error) {
    return <div>Error: {error}</div>;
  }
  const combinedLinks = [...(backendLinks || []), ...(selectedLinks || [])];
  const imageToBeShown = profileImage || profile?.image;
  const firstNameLastName = firstName || profile?.firstName;
  const emailToBeShown = email || profile?.email;
  return (
    <StyledContainer>
      <IllustrationPhoneMockUpp
        width="300"
        height="700"
        viewBox="0 -100 300 800"
        links={combinedLinks}
        profileImage={imageToBeShown}
        firstNameLastName={firstNameLastName}
        email={emailToBeShown}
      />
    </StyledContainer>
  );
};
