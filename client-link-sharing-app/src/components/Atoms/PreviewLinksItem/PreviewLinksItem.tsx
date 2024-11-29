import { FC } from 'react';
import { LinkBox } from './PreviewLinksItem.style';

interface PreviewLinkItemProps {
  linkType?: string;
  children: React.ReactNode;
}
export const PreviewLinksItem: FC<PreviewLinkItemProps> = ({ linkType, children }) => {
  return <LinkBox linkType={linkType}>{children}</LinkBox>;
};
