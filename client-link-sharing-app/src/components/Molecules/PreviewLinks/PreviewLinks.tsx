import { FC, useEffect, useState } from 'react';
import { LinkWrapper } from './PreviewLinks.style';
import { LinkFieldValues } from '../../../types/formValues';
import { PreviewLinkList } from '../PreviewLinkList/PreviewLinkList';

interface PreviewLinkProps {}

type RawDataItem = {
  0: { platform: { icon: string; value: string; label: string }; link: string; icon: string };
  id: string;
};
type RawData = Record<string, RawDataItem>;
/*type RawData = {
  [key: string]: {
    0: {
      platform: { icon: string; value: string; label: string };
      link: string;
      icon: string;
    };
    id: string;
  };
};
 */
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
        const rawData: RawData = await response.json();
        // Transform the data to match LinkFieldValues['links'] type
        const transformedData: LinkFieldValues['links'] = Object.values(rawData).map(item => {
          /*value of item[0] is assigned to variabel name nested and 
          value of item[id] is assigned to variable named id */
          const { 0: nested, id } = item;
          return { ...nested, id };
        });

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
