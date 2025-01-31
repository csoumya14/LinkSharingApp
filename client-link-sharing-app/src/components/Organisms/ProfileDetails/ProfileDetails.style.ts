import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  width: 100%;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, fr);
  grid-template-rows: 0.1fr 1fr 0.2fr;
  gap: 1rem;
  background-color: ${props => props.theme.palette.neutral.white};
`;
