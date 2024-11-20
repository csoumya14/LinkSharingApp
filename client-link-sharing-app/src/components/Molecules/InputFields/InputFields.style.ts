import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledLabel = styled.label`
  font-size: ${props => props.theme.typography.bodyS};
`;
