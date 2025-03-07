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
import { useAppContext } from '../../../context/AppContext';
import { createFileList } from '../../../utils/fileUtils';
import { createProfile, getProfile, updateExistingProfile } from '../../../helpers/profileHelpers';

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
  const { updateProfile } = useAppContext(); // Get update functions

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
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No authentication token found. Please log in to save profile details.');
      return;
    }
    const { userId } = JSON.parse(atob(token.split('.')[1]));

    // Append the file (extract the first file from FileList)

    try {
      const existingProfile = await getProfile(userId, token);
      if (!existingProfile) {
        console.log(' Profile not found. Creating new profile...');
        const createdProfile = await createProfile(data, token);

        console.log('Profile created successfully:', createdProfile);

        // Step 4: Update Context with New Profile
        updateProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          image: data.image?.[0] ? createFileList(data.image[0]) : undefined,
        });

        reset(); // Reset form
        return;
      }
      console.log('Profile exists. Updating...');
      const updatedProfile = await updateExistingProfile(data, userId, token);

      console.log('Profile updated successfully:', updatedProfile);

      // Immediately update the profile in the AppContext
      updateProfile({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image, // Ensure File object or undefined
      });
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
        <ButtonSave
          isDirty={isDirty}
          isValid={isValid}
          handleClick={handleSubmit(onSubmit)}
          text="Save"
        />
      </StyledContainer>
    </Wrapper>
  );
};
