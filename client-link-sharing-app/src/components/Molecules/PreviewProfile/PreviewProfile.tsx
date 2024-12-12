import { FC } from 'react';
import { Banner } from '../../Atoms/Banner/Banner';
import {
  ImageContainer,
  NamePlaceholder,
  EmailPlaceholder,
  StyledImage,
  ProfileWrapper,
} from './PreviewProfile.style';
import { useAppContext } from '../../../context/AppContext';

interface PreviewProfileProps {}
export const PreviewProfile: FC<PreviewProfileProps> = () => {
  const { profile, error } = useAppContext();
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ProfileWrapper>
      {profile ? (
        <>
          <ImageContainer>
            {profile.image && (
              <StyledImage src={!!profile.image ? `${profile.image}` : ''} alt="Profile" />
            )}
          </ImageContainer>
          {profile.firstName ? (
            <Banner textLevel="h2">
              {profile.firstName} {profile.lastName}
            </Banner>
          ) : (
            <NamePlaceholder>&nbsp;</NamePlaceholder>
          )}
          {profile.email ? (
            <Banner textLevel="p">{profile.email}</Banner>
          ) : (
            <EmailPlaceholder>&nbsp;</EmailPlaceholder>
          )}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </ProfileWrapper>
  );
};
