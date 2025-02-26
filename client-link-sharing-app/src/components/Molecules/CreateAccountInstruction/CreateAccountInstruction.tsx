import { FC } from 'react';
import { Banner } from '../../Atoms/Banner/Banner';
import { CustomNavLink } from '../CustomNavLink/CustomNavLink';
import { Container } from './CreateAccountInstruction.style';

interface CreateAccountInstructionProps {}
export const CreateAccountInstruction: FC<CreateAccountInstructionProps> = () => {
  return (
    <Container>
      <Banner textLevel="p">Don't have an account?</Banner>
      <CustomNavLink to={'/signup'} id={'sign-up'}>
        Create Account
      </CustomNavLink>
    </Container>
  );
};
