import { FC } from 'react';
import { IllustrationPhoneMockUp } from '../../Atoms/SVGs/IllustrationPhoneMockUp/IllustrationPhoneMockUp';
import { Container, StyledHeading, StyledPara } from './InstructionAddLinks.style';

interface InstructionAddLinksProps {}
export const InstructionAddLinks: FC<InstructionAddLinksProps> = () => {
  return (
    <Container>
      <IllustrationPhoneMockUp />
      <StyledHeading textLevel="h2" role="heading" aria-level={2}>
        Lets get you started
      </StyledHeading>
      <StyledPara>
        Use the "Add new link" button to get started. Once you have more than one link, you can
        reorder and edit them. We're here to help you share your profiles with everyone!
      </StyledPara>
    </Container>
  );
};
