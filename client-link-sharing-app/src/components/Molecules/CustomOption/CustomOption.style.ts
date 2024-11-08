import { styled } from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.palette.primary.veryLightGrey};
  margin: 0rem 1rem;
  padding: 0.6rem 0rem;
  display: flex;
  align-items: center;
  &:hover {
    color: ${props => props.theme.palette.primary.purple};
    svg {
      fill: ${props => props.theme.palette.primary.purple};
    }
  }
  svg {
    fill: ${props => props.theme.palette.primary.grey};
  }
`;
