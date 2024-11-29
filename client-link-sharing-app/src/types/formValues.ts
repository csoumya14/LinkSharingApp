export interface LinkFieldValues {
  links: {
    platform: { value: string; label: string; icon: string } | null;
    link: string;
  }[];
}

export interface ProfileFieldValues {
  email: string;
  firstName: string;
  lastName: string;
  image: FileList;
}

export type FormFieldValues = LinkFieldValues & ProfileFieldValues;
