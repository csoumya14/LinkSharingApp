import { FC } from 'react';
import {
  ImageContainer,
  ImageWrapper,
  StyledBannerHeading,
  StyledImageLabel,
  StyledSpan,
  StyledImage,
  StyledBanner,
} from './ImageProfileDetails.style';

import { UploadImage } from '../../Atoms/SVGs/UploadImage/UploadImage';
import { UseFormRegister } from 'react-hook-form';
import { ProfileFieldValues } from '../../../types/formValues';

interface ImageProfileDetailsProps {
  register: UseFormRegister<ProfileFieldValues>;
  imagePreview: string | null;
}
export const ImageProfileDetails: FC<ImageProfileDetailsProps> = ({ register, imagePreview }) => {
  return (
    <ImageWrapper>
      <StyledBannerHeading>Profile picture</StyledBannerHeading>
      <ImageContainer>
        {imagePreview ? (
          <div>
            <StyledImage src={imagePreview} alt="Profile Preview" />
          </div>
        ) : (
          <input
            type="file"
            id="fileInput"
            className="visually-hidden"
            accept="image/*"
            {...register('image', { required: 'Profile Image is required' })}
          />
        )}
        <StyledImageLabel htmlFor="fileInput" $imagepreview={!!imagePreview}>
          <UploadImage /> <StyledSpan>{imagePreview ? 'Change Image' : '+Upload Image'}</StyledSpan>
        </StyledImageLabel>
      </ImageContainer>
      <StyledBanner textLevel="p">
        Image must be below 1024x1024px. Use PNG or JPG format
      </StyledBanner>
    </ImageWrapper>
  );
};
