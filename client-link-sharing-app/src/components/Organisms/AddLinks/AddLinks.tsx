import { FC, useState } from 'react';
import { InstructionFormAddLinks } from '../InstructionFormAddLinks/InstructionFormAddLinks';
import { StyledContainer, Wrapper } from './AddLinks.style';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { LinkFieldValues } from '../../../types/formValues';
import { ButtonSave } from '../../Molecules/ButtonSave/ButtonSave';
import { CustomizableTextContainer } from '../../Molecules/CustomizableTextContainer/CustomizableTextContainer';
import { PhonePreview } from '../../Molecules/PhonePreview/PhonePreview';
import { useMediaQuery } from 'react-responsive';
import { useAppContext } from '../../../context/AppContext';

interface AddLinksProps {}

export const AddLinks: FC<AddLinksProps> = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const {
    register,
    getValues,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<LinkFieldValues>({
    mode: 'onChange',
    defaultValues: {
      links: [{ platform: null, link: '' }], // Initialize with one set of fields
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links',
  });

  //Watch form values for real-time svg updates
  const watchedLinks = watch('links');

  //Map watchedLinks into the structre expected by PhonePreview
  const previewLinks = fields.map((field, index) => ({
    id: field.id,
    link: watchedLinks[index]?.link || '',
    platform: watchedLinks[index]?.platform || { icon: '', label: '', value: '' },
  }));
  const { updateLinks } = useAppContext();
  // Handle form submission
  const onSubmit: SubmitHandler<LinkFieldValues> = async data => {
    console.log(data.links);
    try {
      const response = await fetch('http://localhost:3001/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.links),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Links saved to JSON file!');
      updateLinks(data.links);
      reset(); // Reset form after submission
    } catch (error) {
      console.error('Failed to save links', error);
    }
  };

  const handleAddNewLinkClick = () => {
    setIsFormVisible(true);
    append({ platform: null, link: '' });
  };
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });
  return (
    <Wrapper>
      {isLargeScreen && <PhonePreview selectedLinks={previewLinks} />}
      <StyledContainer>
        <div>
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
        </div>
        <ButtonSave isDirty={isDirty} isValid={isValid} handleClick={handleSubmit(onSubmit)} />
      </StyledContainer>
    </Wrapper>
  );
};
