import { FC } from 'react';
import { ButtonContainer, StyledButton } from './ButtonLogin.style';

interface ButtonLoginProps {
  isValid: boolean;
  isDirty: boolean;
  handleClick: () => void;
  text?: string;
}
export const ButtonLogin: FC<ButtonLoginProps> = ({ isValid, isDirty, handleClick, text }) => {
  return (
    <ButtonContainer>
      <StyledButton
        type="submit"
        variant="primary"
        aria-labelledby="myForm"
        aria-controls="myForm"
        isDisabled={!isValid || !isDirty}
        onClick={handleClick}
      >
        {text}
      </StyledButton>
    </ButtonContainer>
  );
};
