import { FC } from 'react';
import {
  FieldArrayWithId,
  Control,
  UseFieldArrayRemove,
  FieldErrors,
  UseFormRegister,
  UseFormGetValues,
} from 'react-hook-form';
import {
  Container,
  LinkContainer,
  StyledButton,
  StyledForm,
} from './InstructionFormAddLinks.style';
import { InstructionAddLinks } from '../InstructionAddLinks/InstructionAddLinks';
import { InputLink } from '../../Molecules/InputLink/InputLink';
import { SelectPlatform } from '../../Molecules/SelectPlatform/SelectPlatform';
import { LinkIndexButton } from '../../Molecules/LinkIndexButton/LinkIndexButton';
import { FormValues } from '../../../types/formValues';

interface LinkFormProps {
  isFormVisible: boolean;
  fields: FieldArrayWithId<FormValues, 'links', 'id'>[];
  control: Control<FormValues, any>;
  handleAddNewLinkClick: () => void;
  getValues: (name: string) => any;
  remove: UseFieldArrayRemove;
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
}

// Define a type for the form data

export const InstructionFormAddLinks: FC<LinkFormProps> = ({
  isFormVisible,
  fields,
  handleAddNewLinkClick,
  control,
  getValues,
  remove,
  errors,
  register,
}) => {
  return (
    <Container>
      <StyledButton variant="secondary" onClick={handleAddNewLinkClick}>
        + Add New Link
      </StyledButton>
      {!isFormVisible || fields.length === 0 ? (
        <InstructionAddLinks />
      ) : (
        <StyledForm id="myForm">
          {fields.map((_field, index) => (
            <LinkContainer key={index}>
              <LinkIndexButton index={index} remove={remove} />
              <SelectPlatform errors={errors} control={control} index={index} />
              <InputLink errors={errors} register={register} getValues={getValues} index={index} />
            </LinkContainer>
          ))}
        </StyledForm>
      )}
    </Container>
  );
};
