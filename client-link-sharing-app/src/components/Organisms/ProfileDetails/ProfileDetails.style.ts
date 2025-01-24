import { styled } from 'styled-components';

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
  height: 80vh;
  margin-top: 2rem;
`;
