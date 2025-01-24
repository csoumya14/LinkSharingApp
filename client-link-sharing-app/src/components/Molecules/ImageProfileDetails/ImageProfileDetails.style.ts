import { styled } from 'styled-components';
import { Banner } from '../../Atoms/Banner/Banner';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.palette.primary.lightPurple};
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const StyledImageLabel = styled.label<{ $imagepreview?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  svg {
    fill: ${props =>
      props.$imagepreview ? props.theme.palette.neutral.white : props.theme.palette.primary.purple};
  }
  color: ${props =>
    props.$imagepreview ? props.theme.palette.neutral.white : props.theme.palette.primary.purple};
  gap: 1rem;
  z-index: 100;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: ${props => props.theme.palette.primary.offWhite};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 1fr 0.5fr 0.5fr;
    align-items: center;
  }
`;
export const StyledBannerHeading = styled(Banner)`
  font-size: ${props => props.theme.typography.bodyM.fontSize};
`;

export const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  filter: brightness(70%);
  z-index: -1;
`;

export const StyledBanner = styled(Banner)`
  font-size: ${props => props.theme.typography.bodyS.fontSize};
  color: ${props => props.theme.palette.primary.grey};
`;
