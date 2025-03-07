import { styled } from 'styled-components';
import { Banner } from '../../Banner/Banner';

export const Wrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledInput = styled.input<{ $errorpresent?: boolean; $iconpresent?: boolean }>`
  width: 100%;
  border: 1px solid;
  font-size: ${props => props.theme.typography.bodyM};
  border-color: ${props =>
    props.$errorpresent
      ? props.theme.palette.primary.red
      : props.theme.palette.primary.veryLightGrey};
  padding: 0.7rem;
  padding-left: ${props => (props.$iconpresent ? '2rem' : '1rem')};
  border-radius: 8px;
`;

export const StyledErrorMessage = styled(Banner)`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  color: ${props => props.theme.palette.primary.red};
  font-size: 0.8rem;
  pointer-events: none;
`;
