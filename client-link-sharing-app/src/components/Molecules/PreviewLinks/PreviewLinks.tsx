import { FC, useEffect, useState } from 'react';
import { LinkWrapper } from './PreviewLinks.style';
import { LinkFieldValues } from '../../../types/formValues';

interface PreviewLinkProps {}

export const PreviewLinks: FC<PreviewLinkProps> = () => {
  const [links, setLinks] = useState<LinkFieldValues['links']>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/links');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: LinkFieldValues['links'] = await response.json();
        setLinks(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchProfile();
  }, []);
  return <LinkWrapper>{links && links.map(link => <p>{link.platform?.value}</p>)}</LinkWrapper>;
};
