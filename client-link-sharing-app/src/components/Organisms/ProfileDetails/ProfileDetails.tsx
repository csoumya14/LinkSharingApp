import { FC, useEffect, useState } from 'react';
import { StyledContainer, StyledForm, Wrapper } from './ProfileDetails.style';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProfileFieldValues } from '../../../types/formValues';
import { ImageProfileDetails } from '../../Molecules/ImageProfileDetails/ImageProfileDetails';
import { TextProfileDetail } from '../../Molecules/TextProfileDetails/TextProfileDetails';
import { useMediaQuery } from 'react-responsive';
import { PhonePreview } from '../../Molecules/PhonePreview/PhonePreview';

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
  //Watch form values for real-time svg updates
  const watchedFirstName = watch('firstName');
  const watchedLastName = watch('lastName');
  const watchedEmail = watch('email');

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
    const profileId = 1;
    // Append the file (extract the first file from FileList)
    if (data.image && data.image[0]) {
      formData.append('image', imageFile[0]);
    }

    try {
      const response = await fetch(`http://localhost:3001/api/profiles/${profileId}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Profile updated successfully:', result);
      reset();
    } catch (error) {
      console.error('Error submitting profile data:', error);
    }
  };
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });
  return (
    <Wrapper>
      {isLargeScreen && (
        <PhonePreview
          profileImage={imageFile}
          firstName={watchedFirstName}
          lastName={watchedLastName}
          email={watchedEmail}
        />
      )}
      <StyledContainer>
        <CustomizableTextContainer
          headingText="Profile Details"
          headingLevel="h2"
          bannerLevel="p"
          bannerText="Add your details to create a personal touch to your profile"
        />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ImageProfileDetails imagePreview={imagePreview} register={register} />
          <TextProfileDetail register={register} errors={errors} />
        </StyledForm>
        <ButtonSave isDirty={isDirty} isValid={isValid} handleClick={handleSubmit(onSubmit)} />
      </StyledContainer>
    </Wrapper>
  );
};
