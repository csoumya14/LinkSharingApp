import { styled } from 'styled-components';

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 90%;
  }
`;
