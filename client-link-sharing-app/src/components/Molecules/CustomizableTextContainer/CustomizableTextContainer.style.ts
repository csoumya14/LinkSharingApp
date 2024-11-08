import { styled } from 'styled-components';
import { Banner } from '../../Atoms/Banner/Banner';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.typography.headingM};
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.typography.bodyM};
`;
