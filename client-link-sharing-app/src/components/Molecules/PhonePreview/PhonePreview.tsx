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
  console.log('image', profile?.image);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const getImageUrl = (image: FileList | string | undefined) => {
    if (typeof image === 'string') {
      return image; // If it's already a URL, return it
    } else if (image instanceof FileList && image.length > 0) {
      return URL.createObjectURL(image[0]); // Convert FileList to a URL
    }
    return undefined; // Return undefined if no valid image is found
  };

  const imageToBeShown = getImageUrl(profileImage) || getImageUrl(profile?.image);

  const combinedLinks = [...(backendLinks || []), ...(selectedLinks || [])];

  const fullName =
    [firstName, lastName].filter(Boolean).join(' ') ||
    [profile?.firstName, profile?.lastName].filter(Boolean).join(' ');
  const emailToBeShown = email || profile?.email;
  const filteredLinks = combinedLinks.filter(linkItem => linkItem.link.trim() !== '');
  return (
    <StyledContainer>
      <IllustrationPhoneMockUpp
        width="300"
        height="700"
        viewBox="0 -100 300 800"
        links={filteredLinks}
        profileImage={imageToBeShown}
        firstNameLastName={fullName}
        email={emailToBeShown}
      />
    </StyledContainer>
  );
};
