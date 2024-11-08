import { styled } from 'styled-components';
import { Button } from '../../Atoms/Button/Button';

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  padding: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  gap: 4rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
