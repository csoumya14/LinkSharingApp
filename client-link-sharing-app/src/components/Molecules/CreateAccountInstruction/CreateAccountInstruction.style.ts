import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;
