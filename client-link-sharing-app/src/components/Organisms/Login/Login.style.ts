import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 60%;
    margin: 200px auto;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.neutral.white};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr auto;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
