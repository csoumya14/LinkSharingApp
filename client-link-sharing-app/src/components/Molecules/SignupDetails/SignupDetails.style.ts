import { styled } from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  background-color: ${props => props.theme.palette.primary.offWhite};
`;
