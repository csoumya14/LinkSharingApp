import { FC } from 'react';
import { ButtonContainer, StyledButton, StyledLine } from './ButtonSave.style';

interface ButtonSaveProps {
  isValid: boolean;
  isDirty: boolean;
  handleClick: () => void;
  text?: string;
}
export const ButtonSave: FC<ButtonSaveProps> = ({ isValid, isDirty, handleClick, text }) => {
  return (
    <ButtonContainer>
      <StyledLine />
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
