import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFieldValues } from '../../../types/formValues';
import { LogoLargeScreen } from '../../Atoms/SVGs/LogoLargeScreen/LogoLargeScreen';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { LoginDetails } from '../../Molecules/LoginDetails/LoginDetails';
import { Container, StyledForm, Wrapper } from './Login.style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { CreateAccountInstruction } from '../../Molecules/CreateAccountInstruction/CreateAccountInstruction';
import { useAppContext } from '../../../context/AppContext';
import { ButtonLogin } from '../../Molecules/ButtonLogin/ButtonLogin';

export const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const { refreshData } = useAppContext();
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
    if (isAuthenticated) {
      refreshData();
      navigate('/add-links');
    }
  };

  return (
    <Container>
      <LogoLargeScreen />
      <Wrapper>
        <CustomizableTextContainer
          headingText="Login"
          headingLevel="h2"
          bannerLevel="p"
          bannerText="Add your details below to get back into the app "
        />
        <StyledForm>
          <LoginDetails register={register} errors={errors} />
          <ButtonLogin
            isDirty={isDirty}
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
      </Wrapper>
    </Container>
  );
};
