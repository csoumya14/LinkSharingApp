import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  background-color: ${props => props.theme.palette.neutral.white};
`;
