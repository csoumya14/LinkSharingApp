import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  height: 100vh;
  justify-content: space-between;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
  }
`;
