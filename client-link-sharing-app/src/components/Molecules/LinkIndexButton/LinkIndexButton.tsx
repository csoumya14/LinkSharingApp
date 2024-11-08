import { FC } from 'react';
import { LinkIndexButtonWrapper, StyledRemoveButton, StyledSpan } from './LinkIndexButton.style';
import { Drag } from '../../Atoms/SVGs/Drag/Drag';
import { UseFieldArrayRemove } from 'react-hook-form';

interface LinkIndexButtonProps {
  index: number;
  remove: UseFieldArrayRemove;
}
export const LinkIndexButton: FC<LinkIndexButtonProps> = ({ index, remove }) => {
  return (
    <LinkIndexButtonWrapper>
      {' '}
      <div>
        <Drag /> <StyledSpan>{`Link #${index + 1}`}</StyledSpan>{' '}
      </div>
      <StyledRemoveButton type="button" variant="secondary" onClick={() => remove(index)}>
        Remove
      </StyledRemoveButton>
    </LinkIndexButtonWrapper>
  );
};
