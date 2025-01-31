import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { LinkFieldValues, ProfileFieldValues, RawData } from '../types/formValues';
import { createFileList } from '../utils/fileUtils';

interface AppContextValues {
  profile: ProfileFieldValues | null;
  links: LinkFieldValues['links'];
  error: string | null;
  updateProfile: (newProfile: Partial<ProfileFieldValues>) => void;
  updateLinks: (newLinks: LinkFieldValues['links']) => void;
}

const AppContext = createContext<AppContextValues | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileFieldValues | null>(null);
  const [links, setLinks] = useState<LinkFieldValues['links']>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch profile data
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/profiles/1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const transformedProfile: ProfileFieldValues = {
          id: data.id,
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          image: data.image,
        };
        setProfile(transformedProfile);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    // Fetch links data
    const fetchLinks = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/links');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData: RawData[] = await response.json();
        const transformedLinks: LinkFieldValues['links'] = rawData.map(item => ({
          platform: {
            value: item.platform_value || '',
            label: item.platform_label || '',
            icon: item.platform_icon || '',
          },
          link: item.link || '',
        }));
        setLinks(transformedLinks);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchProfile();
    fetchLinks();
  }, []);

  //Function to update the profile state immediately
  const updateProfile = (newProfile: Partial<ProfileFieldValues>) => {
    setProfile(prevProfile => {
      if (!prevProfile) return null; // Ensure prevProfile exists before updating

      return {
        ...prevProfile, // Keep existing required fields
        ...newProfile, // Merge in new profile data
        id: prevProfile.id, // Ensure `id` is never `undefined`
        image:
          newProfile.image instanceof FileList
            ? newProfile.image
            : newProfile.image
              ? createFileList(newProfile.image) // Convert File to FileList
              : prevProfile.image, // Keep existing image if none provided
      };
    });
  };
  const updateLinks = (newLinks: LinkFieldValues['links']) => {
    setLinks(prevLinks => [...prevLinks, ...newLinks]);
  };

  return (
    <AppContext.Provider value={{ profile, links, error, updateProfile, updateLinks }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
