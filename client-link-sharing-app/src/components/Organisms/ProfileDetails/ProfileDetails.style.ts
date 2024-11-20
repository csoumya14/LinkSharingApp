import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const StyledContainer = styled.div`
  display: grid;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.palette.primary.lightPurple};
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const StyledImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.palette.primary.purple};
  font-weight: bold;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
