import { styled } from 'styled-components';
import { Button } from '../../Atoms/Button/Button';

export const LinkIndexButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledRemoveButton = styled(Button)`
  border: none;
  padding: 0px;
  color: ${props => props.theme.palette.primary.grey};
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;
