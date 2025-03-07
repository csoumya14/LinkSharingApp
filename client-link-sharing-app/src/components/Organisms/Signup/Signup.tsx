import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupFieldValues } from '../../../types/formValues';
import { LogoLargeScreen } from '../../Atoms/SVGs/LogoLargeScreen/LogoLargeScreen';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { Container, StyledForm } from './Signup.style';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { CreateAccountInstruction } from '../../Molecules/CreateAccountInstruction/CreateAccountInstruction';
import { SignupDetails } from '../../Molecules/SignupDetails/SignupDetails';

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
      <CustomizableTextContainer
        headingText="Create account"
        headingLevel="h2"
        bannerLevel="p"
        bannerText="Let's get you started sharing your links!"
      />
      <StyledForm>
        <SignupDetails watch={watch} register={register} errors={errors} />
        <ButtonSave
          isDirty={isDirty}
          isLogin
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
    </Container>
  );
};
