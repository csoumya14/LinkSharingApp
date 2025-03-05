import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFieldValues } from '../../../types/formValues';
import { LogoLargeScreen } from '../../Atoms/SVGs/LogoLargeScreen/LogoLargeScreen';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { LoginDetails } from '../../Molecules/LoginDetails/LoginDetails';
import { Container, StyledForm } from './Login.style';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { CreateAccountInstruction } from '../../Molecules/CreateAccountInstruction/CreateAccountInstruction';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<LoginFieldValues>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<LoginFieldValues> = async data => {
    await login(data.email, data.password);
    navigate('/add-links');
  };

  return (
    <Container>
      <LogoLargeScreen />
      <CustomizableTextContainer
        headingText="Login"
        headingLevel="h2"
        bannerLevel="p"
        bannerText="Add your details below to get back into the app "
      />
      <StyledForm>
        <LoginDetails register={register} errors={errors} />
        <ButtonSave
          isDirty={isDirty}
          isLogin
          isValid={isValid}
          handleClick={handleSubmit(onSubmit)}
          text="Login"
        />
      </StyledForm>
      <CreateAccountInstruction
        instructionText="Don't have an account?"
        buttonText="Create account"
        to={'/signup'}
      />
    </Container>
  );
};
