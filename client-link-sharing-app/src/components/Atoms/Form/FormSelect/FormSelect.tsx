import React from 'react';
import {
  Controller,
  Control,
  FieldError,
  RegisterOptions,
  Merge,
  FieldErrorsImpl,
} from 'react-hook-form';
import { StyledErrorMessage } from './FormSelect.style';
import Select from 'react-select';
import { CustomOption } from '../../../Molecules/CustomOption/CustomOption';
import { CustomSingleValue } from '../../../Molecules/CustomSingleValue/CustomSingleValue';

type FormSelectProps = {
  name: string;
  control: Control<any>; // Type `any` can be replaced with your form's specific data type
  rules?: RegisterOptions;
  options: Array<{ value: string; label: string }>; // Options for the select
  isClearable?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};

const customStyles = {
  control: (base: any, state: { isFocused: any }) => ({
    ...base,
    display: 'flex',
    // match with the menu
    borderRadius: 10,
    // Overwrittes the different states of border
    borderColor: '#d9d9d9',
    // Removes weird border around container
    boxShadow: state.isFocused ? '0 0 5px rgba(128, 0, 128, 0.5)' : 'none', // Box shadow on active/focus
    '&:hover': {
      boxShadow: '0 0 5px rgba(128, 0, 128, 0.5)', // Box shadow on hover
      borderColor: '#633cff',
    },
    '&:focus-within': {
      boxShadow: '0 0 5px rgba(128, 0, 128, 0.5)', // Box shadow when control is active
    },
  }),
  menu: (base: any) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 10,
    // kill the gap
    marginTop: 10,
    textAlign: 'left',
    // prevent menu to scroll y
    wordWrap: 'break-word',
  }),
  menuList: (base: any) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    color: '#633cff',
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
  rules,
  options,
  isClearable = false,
  error,
}) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={options[0].value}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={customStyles}
            components={{
              Option: CustomOption,
              SingleValue: CustomSingleValue,
            }}
            isClearable={isClearable}
            defaultValue={options[0].value}
          />
        )}
      />
      {error && typeof error.message === 'string' && (
        <StyledErrorMessage>{error.message}</StyledErrorMessage>
      )}
    </div>
  );
};

export default FormSelect;
