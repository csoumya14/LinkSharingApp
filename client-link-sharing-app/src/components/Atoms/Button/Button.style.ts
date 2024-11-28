import { styled } from 'styled-components';

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.palette.primary.purple : theme.palette.neutral.white};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.palette.neutral.white : theme.palette.primary.purple};
  border: 1px solid ${props => props.theme.palette.primary.purple};

  &:disabled,
  &[aria-disabled='true'] {
    background-color: ${props => props.theme.palette.primary.purple};
    opacity: 25%;
    color: ${props => props.theme.palette.neutral.white};
    cursor: not-allowed;
  }

  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }
`;
