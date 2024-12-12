import { FC } from 'react';
import { LinkWrapper } from './PreviewLinks.style';
import { PreviewLinkList } from '../PreviewLinkList/PreviewLinkList';
import { useAppContext } from '../../../context/AppContext';

interface PreviewLinkProps {}

export const PreviewLinks: FC<PreviewLinkProps> = () => {
  const { links, error } = useAppContext();
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <LinkWrapper>
      {links &&
        links.map((link, i) => {
          return <PreviewLinkList key={i} link={link} />;
        })}
    </LinkWrapper>
  );
};
