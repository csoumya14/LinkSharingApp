import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupFieldValues } from '../../../types/formValues';
import { LogoLargeScreen } from '../../Atoms/SVGs/LogoLargeScreen/LogoLargeScreen';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { Container, StyledForm, Wrapper } from './Signup.style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { CreateAccountInstruction } from '../../Molecules/CreateAccountInstruction/CreateAccountInstruction';
import { SignupDetails } from '../../Molecules/SignupDetails/SignupDetails';
import { ButtonLogin } from '../../Molecules/ButtonLogin/ButtonLogin';

export const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<SignupFieldValues>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<SignupFieldValues> = async data => {
    await signup(data.email, data.password);
    navigate('/login');
  };

  return (
    <Container>
      <LogoLargeScreen />
      <Wrapper>
        <CustomizableTextContainer
          headingText="Create account"
          headingLevel="h2"
          bannerLevel="p"
          bannerText="Let's get you started sharing your links!"
        />
        <StyledForm>
          <SignupDetails watch={watch} register={register} errors={errors} />
          <ButtonLogin
            isDirty={isDirty}
            isValid={isValid}
            handleClick={handleSubmit(onSubmit)}
            text="Create new account"
          />
        </StyledForm>
        <CreateAccountInstruction
          to={'/login'}
          instructionText={'Already have an account'}
          buttonText={'Login'}
        />
      </Wrapper>
    </Container>
  );
};
