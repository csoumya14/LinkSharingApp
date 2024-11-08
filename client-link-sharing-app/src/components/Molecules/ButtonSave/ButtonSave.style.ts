import { styled } from 'styled-components';
import { Button } from '../../Atoms/Button/Button';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const StyledLine = styled.hr`
  width: 100%;
  padding: -1rem;
  border: 0.1px solid ${props => props.theme.palette.primary.veryLightGrey};
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
  color: ${props => props.theme.palette.neutral.white};
  border-color: none;
`;
