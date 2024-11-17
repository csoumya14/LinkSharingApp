import { FC, useEffect, useState } from 'react';
import { ImageContainer, StyledContainer, StyledImageLabel } from './ProfileDetails.style';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UploadImage } from '../../Atoms/SVGs/UploadImage/UploadImage';

interface ProfileDetailsProps {}
interface ProfileFormData {
  firstname: string;
  lastname: string;
  email: string;
  image: FileList;
}
export const ProfileDetails: FC<ProfileDetailsProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<ProfileFormData>({
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
  const onSubmit: SubmitHandler<ProfileFormData> = async data => {
    const formData = new FormData();

    // Append text fields
    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
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
                <UploadImage /> <span>+Upload Image</span>
              </StyledImageLabel>
            </ImageContainer>
          )}
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" {...register('firstname', { required: 'First name is required' })} />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text" {...register('lastname', { required: 'Last name is required' })} />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </form>

      <ButtonSave isDirty={isDirty} isValid={isValid} handleClick={handleSubmit(onSubmit)} />
    </StyledContainer>
  );
};
