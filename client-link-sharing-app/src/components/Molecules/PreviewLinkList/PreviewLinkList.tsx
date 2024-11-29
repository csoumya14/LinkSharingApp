import { FC } from 'react';
import { PreviewLinksItem } from '../../Atoms/PreviewLinksItem/PreviewLinksItem';
import { IconKey, iconMapping } from '../../../utils/iconMapping';

interface PreviewLinkListProps {
  link: {
    platform: {
      value: string;
      label: string;
      icon: string;
    } | null;
    link: string;
  };
}
export const PreviewLinkList: FC<PreviewLinkListProps> = ({ link }) => {
  const Icon = link.platform?.icon ? iconMapping[link.platform.icon as IconKey] : null;
  return (
    <PreviewLinksItem linkType={link.platform?.value || ''}>
      {Icon && <Icon />} {link.platform?.label}
    </PreviewLinksItem>
  );
};
