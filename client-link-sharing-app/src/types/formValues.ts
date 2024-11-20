export interface LinkFieldValues {
  links: {
    platform: { value: string; label: string } | null;
    link: string;
    icon: string;
  }[];
}

export interface ProfileFieldValues {
  email: string;
  firstName: string;
  lastName: string;
  image: FileList;
}

export type FormFieldValues = LinkFieldValues & ProfileFieldValues;
