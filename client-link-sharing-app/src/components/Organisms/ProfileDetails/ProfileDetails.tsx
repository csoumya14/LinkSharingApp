import { FC } from 'react';
import { StyledContainer } from './ProfileDetails.style';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ProfileDetailsProps {}
interface ProfileFormData {
  firstname: string;
  lastname: string;
  email: string;
  image: File;
}
export const ProfileDetails: FC<ProfileDetailsProps> = () => {
  const {
    register,
    getValues,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<ProfileFormData>({
    mode: 'onChange',
  });

  // Handle form submission
  const onSubmit: SubmitHandler<ProfileFormData> = async data => {
    try {
      // create formData object to handle both text data and image file
      const formData = new FormData();
      formData.append('firsname', data.firstname);
      formData.append('lastname', data.lastname);
      formData.append('email', data.email);

      if (data.image) {
        formData.append('image', data.image); //Append the image file
      }
      const response = await fetch('http://localhost:3001/profile', {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit profile data');
      }

      const result = await response.json();
      console.log('Profile data submitted successfully:', result);
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
          <label>Profile Image:</label>
          <input type="file" accept="image/*" {...register('image')} />
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

        <button type="submit">Submit Profile</button>
      </form>

      <ButtonSave isDirty={isDirty} isValid={isValid} handleClick={handleSubmit(onSubmit)} />
    </StyledContainer>
  );
};
