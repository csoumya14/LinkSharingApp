import { styled } from 'styled-components';
import { Banner } from '../../Atoms/Banner/Banner';
import { IllustrationPhoneMockUp } from '../../Atoms/SVGs/IllustrationPhoneMockUp/IllustrationPhoneMockUp';

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.typography.headingS};
`;

export const StyledIllustrationPhoneMockUp = styled(IllustrationPhoneMockUp)<{
  width: string;
  height: string;
  smallWidth: string;
  smallHeight: string;
  smallerWidth: string;
  smallerHeight: string;
}>`
  width: ${({ smallerWidth }) => smallerWidth || '60px'};
  height: ${({ smallerHeight }) => smallerHeight || '50px'};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: ${({ smallWidth }) => smallWidth || '900'};
    height: ${({ smallHeight }) => smallHeight || ''};
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    width: ${({ width }) => width || '120px'};
    height: ${({ height }) => height || '100px'};
  }
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.typography.bodyM};
  text-align: center;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 60%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
