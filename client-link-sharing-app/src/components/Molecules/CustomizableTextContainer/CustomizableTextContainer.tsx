import { FC } from 'react';
import { StyledHeading, TextContainer } from './CustomizableTextContainer.style';
import { Banner } from '../../Atoms/Banner/Banner';

interface CustomizableTextContainerProps {
  headingText: string;
  bannerText: string;
  headingLevel: keyof JSX.IntrinsicElements;
  bannerLevel: keyof JSX.IntrinsicElements;
}
export const CustomizableTextContainer: FC<CustomizableTextContainerProps> = ({
  headingText,
  bannerText,
  headingLevel = 'h2',
  bannerLevel = 'p',
}) => {
  return (
    <TextContainer>
      <StyledHeading textLevel={headingLevel}>{headingText}</StyledHeading>
      <Banner textLevel={bannerLevel}>{bannerText}</Banner>
    </TextContainer>
  );
};
