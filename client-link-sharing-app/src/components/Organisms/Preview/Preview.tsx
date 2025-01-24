import { FC, useState } from 'react';
import { Button } from '../../Atoms/Button/Button';
import { useNavigate } from 'react-router-dom';
import { LinkFieldValues } from '../../../types/formValues';
import { BackgroundDiv, ButtonWrapper, Container, InfoWrapper } from './Preview.stye';
import { PreviewProfile } from '../../Molecules/PreviewProfile/PreviewProfile';
import { PreviewLinks } from '../../Molecules/PreviewLinks/PreviewLinks';

interface PreviewProps {}
export const Preview: FC<PreviewProps> = () => {
  const navigate = useNavigate();
  const [copyMessage, setCopyMessage] = useState('');
  const handleClick = () => {
    navigate('/profile'); // Navigate to the /profile page
  };
  const links: any = [];
  const handleShareLinks = () => {
    // Join all links with newlines for clipboard copying
    const allLinks = links.join('\n');
    navigator.clipboard.writeText(allLinks).then(
      () => {
        setCopyMessage('All links have been copied to your clipboard.');
        // Clear the message after a few seconds
        setTimeout(() => setCopyMessage(''), 3000);
      },
      () => {
        setCopyMessage('Failed to copy links.');
        setTimeout(() => setCopyMessage(''), 3000);
      },
    );
  };
  return (
    <Container>
      <BackgroundDiv />
      <ButtonWrapper>
        <Button onClick={handleClick} variant="secondary">
          {' '}
          Back to editor
        </Button>
        <Button onClick={handleShareLinks} variant="primary">
          {' '}
          Share Link
        </Button>
      </ButtonWrapper>
      <InfoWrapper>
        <PreviewProfile />
        <PreviewLinks />
      </InfoWrapper>
    </Container>
  );
};
