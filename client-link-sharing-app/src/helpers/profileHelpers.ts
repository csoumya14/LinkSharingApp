import { ProfileFieldValues } from '../types/formValues';

export const getProfile = async (userId: number, token: string) => {
  try {
    const response = await fetch(`http://localhost:3001/api/profiles/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 404) {
      console.log('Profile not found');
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profile', error);
    return null;
  }
};

export const createProfile = async (data: ProfileFieldValues, token: string) => {
  try {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }
    const response = await fetch('http://localhost:3001/api/profiles', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const createdProfile = await response.json();
    console.log('Profile created successfully:', createdProfile);
    return createdProfile.profile;
  } catch (error) {
    console.error('Error creating profile', error);
    return null;
  }
};

export const updateExistingProfile = async (
  data: ProfileFieldValues,
  userId: number,
  token: string,
) => {
  try {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }
    const response = await fetch(`http://localhost:3001/api/profiles/${userId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const updatedProfile = await response.json();
    console.log('Profile updated successfully:', updatedProfile);
    return updatedProfile.profile;
  } catch (error) {
    console.error('Error updating profile', error);
    return null;
  }
};
