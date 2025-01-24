import { styled } from 'styled-components';
import { Banner } from '../../Atoms/Banner/Banner';

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.typography.headingS};
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.typography.bodyM};
  text-align: center;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 60%;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    width: 80%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
