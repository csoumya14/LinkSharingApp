import { FC } from 'react';
import { ButtonContainer, StyledButton, StyledLine } from './ButtonSave.style';

interface ButtonSaveProps {
  isValid: boolean;
  isDirty: boolean;
  handleClick: () => void;
  text?: string;
  isLogin?: boolean;
}
export const ButtonSave: FC<ButtonSaveProps> = ({
  isValid,
  isDirty,
  handleClick,
  text,
  isLogin,
}) => {
  return (
    <ButtonContainer>
      {!isLogin && <StyledLine />}
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
