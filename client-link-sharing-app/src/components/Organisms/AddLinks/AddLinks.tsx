import { FC, useState } from 'react';
import { InstructionFormAddLinks } from '../InstructionFormAddLinks/InstructionFormAddLinks';
import { StyledContainer } from './AddLinks.style';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FormValues } from '../../../types/formValues';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';

interface AddLinksProps {}

export const AddLinks: FC<AddLinksProps> = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const {
    register,
    getValues,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      links: [{ platform: null, link: '', icon: 'githubIcon' }], // Initialize with one set of fields
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });
  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      await fetch('http://localhost:3001/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.links),
      });
      alert('Links saved to JSON file!');
      reset(); // Reset form after submission
    } catch (error) {
      console.error('Failed to save links', error);
    }
  };

  const handleAddNewLinkClick = () => {
    setIsFormVisible(true);
    append({ platform: null, link: '', icon: '' }); // Append a new set of fields
  };
  return (
    <StyledContainer>
      <CustomizableTextContainer
        headingText="Customize your links"
        headingLevel="h2"
        bannerLevel="p"
        bannerText=" Add/edit/remove links below and then share all your profiles with the world!"
      />
      <InstructionFormAddLinks
        isFormVisible={isFormVisible}
        fields={fields}
        control={control}
        getValues={getValues}
        handleAddNewLinkClick={handleAddNewLinkClick}
        remove={remove}
        errors={errors}
        register={register}
      />
      <ButtonSave isDirty={isDirty} isValid={isValid} handleClick={handleSubmit(onSubmit)} />
    </StyledContainer>
  );
};
