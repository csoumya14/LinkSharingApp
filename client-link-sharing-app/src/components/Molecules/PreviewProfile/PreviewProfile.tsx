import { FC, useEffect, useState } from 'react';
import { ProfileFieldValues } from '../../../types/formValues';
import { Banner } from '../../Atoms/Banner/Banner';
import {
  ImageContainer,
  NamePlaceholder,
  EmailPlaceholder,
  StyledImage,
  ProfileWrapper,
} from './PreviewProfile.style';

interface PreviewProfileProps {}
export const PreviewProfile: FC<PreviewProfileProps> = () => {
  const [profile, setProfile] = useState<ProfileFieldValues | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async (id: number) => {
      try {
        const response = await fetch(`http://localhost:3001/api/profiles/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const transformedData: ProfileFieldValues = {
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          image: data.image, // Assuming image is a URL or FileList type
        };
        setProfile(transformedData);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchProfile(1);
  }, []);

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
