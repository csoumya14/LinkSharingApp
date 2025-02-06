import { FC } from 'react';
import { LinkWrapper } from './PreviewLinks.style';
import { PreviewLinkList } from '../PreviewLinkList/PreviewLinkList';
import { useAppContext } from '../../../context/AppContext';

interface PreviewLinkProps {
  className?: string;
}

export const PreviewLinks: FC<PreviewLinkProps> = ({ className }) => {
  const { links, error } = useAppContext();
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <LinkWrapper className={className}>
      {links &&
        links.map((link, i) => {
          return <PreviewLinkList key={i} link={link} />;
        })}
    </LinkWrapper>
  );
};
