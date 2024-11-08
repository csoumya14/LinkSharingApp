import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.palette.primary.veryLightGrey};
  padding: 0.7rem;
  padding-left: 2rem;
  border-radius: 8px;
`;
