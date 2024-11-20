import { FC, useEffect, useState } from 'react';
import {
  ImageContainer,
  ImageWrapper,
  StyledContainer,
  StyledForm,
  StyledImageLabel,
  StyledSpan,
} from './ProfileDetails.style';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UploadImage } from '../../Atoms/SVGs/UploadImage/UploadImage';
import { Banner } from '../../Atoms/Banner/Banner';
import { InputFields } from '../../Molecules/InputFields/InputFields';
import { ProfileFieldValues } from '../../../types/formValues';

interface ProfileDetailsProps {}

export const ProfileDetails: FC<ProfileDetailsProps> = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<ProfileFieldValues>({
    mode: 'onChange',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      /*A FileReader is a built in browser API that allows reading the contents of files
      on the client side without uploading them to a server. */
      const reader = new FileReader();
      /*Callback for onloadend
      reader.onloadend is an event handler triggered when the FileReader finishes reading the file. */
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  // Handle form submission
  const onSubmit: SubmitHandler<ProfileFieldValues> = async data => {
    const formData = new FormData();

    // Append text fields
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);

    // Append the file (extract the first file from FileList)
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0].name);
    }

    try {
      const response = await fetch('http://localhost:3001/api/profile', {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setImagePreview(null);
      console.log('Profile updated successfully:', result);
      reset();
    } catch (error) {
      console.error('Error submitting profile data:', error);
    }
  };

  return (
    <StyledContainer>
      <CustomizableTextContainer
        headingText="Profile Details"
        headingLevel="h2"
        bannerLevel="p"
        bannerText="Add your details to create a personal touch to your profile"
      />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ImageWrapper>
          {imagePreview ? (
            <div>
              <p>Image Preview:</p>
              <img
                src={imagePreview}
                alt="Profile Preview"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <ImageContainer>
              <input
                type="file"
                id="fileInput"
                className="visually-hidden"
                accept="image/*"
                {...register('image', { required: 'Profile Image is required' })}
              />
              <StyledImageLabel htmlFor="fileInput">
                <UploadImage /> <StyledSpan>+Upload Image</StyledSpan>
              </StyledImageLabel>
            </ImageContainer>
          )}
          <Banner textLevel="p">Image must be below 1024x1024px. Use PNG or JPG format.</Banner>
        </ImageWrapper>

        <InputFields
          label="First name*"
          type="text"
          name="firstName"
          placeholder="e.g.John"
          register={register}
          validationRules={{
            required: "Can't be empty",
          }}
          errors={errors}
        />

        <InputFields
          label="Last name*"
          type="text"
          name="lastName"
          placeholder="e.g.Appleseed"
          register={register}
          validationRules={{
            required: "Can't be empty",
          }}
          errors={errors}
        />
        <InputFields
          label="Email*"
          type="email"
          name="email"
          placeholder="e.g.email@example.com"
          errors={errors}
          register={register}
          validationRules={{
            required: "Can't be empty",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          }}
        />
      </StyledForm>

      <ButtonSave isDirty={isDirty} isValid={isValid} handleClick={handleSubmit(onSubmit)} />
    </StyledContainer>
  );
};
