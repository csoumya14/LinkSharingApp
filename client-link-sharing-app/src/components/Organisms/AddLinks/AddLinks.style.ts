import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: space-between;
  background-color: ${props => props.theme.palette.neutral.white};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  width: 100%;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    min-height: 80vh;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SVGWrapper = styled.div`
  display: none;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.neutral.white};
    svg {
    }
  }
`;
