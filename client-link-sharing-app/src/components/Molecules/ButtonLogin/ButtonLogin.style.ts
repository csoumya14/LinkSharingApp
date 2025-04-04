import { styled } from 'styled-components';
import { Button } from '../../Atoms/Button/Button';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  gap: 0.1rem;
  background-color: ${props => props.theme.palette.neutral.white};
`;

export const StyledLine = styled.hr`
  width: 100%;
  border: 0.1px solid ${props => props.theme.palette.primary.veryLightGrey};
`;

export const StyledButton = styled(Button)`
  color: ${props => props.theme.palette.neutral.white};
  border-color: none;
`;
