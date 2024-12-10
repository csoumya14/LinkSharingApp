import { FC, useEffect, useState } from 'react';
import { LinkWrapper } from './PreviewLinks.style';
import { LinkFieldValues } from '../../../types/formValues';
import { PreviewLinkList } from '../PreviewLinkList/PreviewLinkList';

interface PreviewLinkProps {}

type RawData = {
  id: number;
  profile_id: number | null;
  platform_value: string;
  platform_label: string;
  platform_icon: string;
  link: string;
};

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
        // Fetch and parse the raw data
        const rawData: RawData[] = await response.json();

        // Transform the data to match LinkFieldValues['links'] type
        const transformedData: LinkFieldValues['links'] = rawData.map(item => ({
          platform: {
            value: item.platform_value || '',
            label: item.platform_label || '',
            icon: item.platform_icon || '',
          },
          link: item.link || '',
        }));

        setLinks(transformedData);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <LinkWrapper>
      {links &&
        links.map((link, i) => {
          return <PreviewLinkList key={i} link={link} />;
        })}
    </LinkWrapper>
  );
};
