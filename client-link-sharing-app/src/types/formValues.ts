export interface LinkFieldValues {
  links: {
    platform: { value: string; label: string; icon: string } | null;
    link: string;
  }[];
}

export interface ProfileFieldValues {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  image: FileList;
}

export type RawData = {
  id: number;
  profile_id: number | null;
  platform_value: string;
  platform_label: string;
  platform_icon: string;
  link: string;
};

export type FormFieldValues = LinkFieldValues & ProfileFieldValues;
