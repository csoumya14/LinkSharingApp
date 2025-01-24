import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const StyledLabel = styled.label`
  font-size: ${props => props.theme.typography.bodyS.fontSize};
`;
