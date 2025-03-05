import { FC } from 'react';
import { Banner } from '../../Atoms/Banner/Banner';
import { CustomNavLink } from '../CustomNavLink/CustomNavLink';
import { Container } from './CreateAccountInstruction.style';

interface CreateAccountInstructionProps {
  instructionText: string;
  buttonText: string;
  to: string;
}
export const CreateAccountInstruction: FC<CreateAccountInstructionProps> = ({
  instructionText,
  buttonText,
  to,
}) => {
  return (
    <Container>
      <Banner textLevel="p">{instructionText}</Banner>
      <CustomNavLink to={to} id={'sign-up'}>
        {buttonText}
      </CustomNavLink>
    </Container>
  );
};
