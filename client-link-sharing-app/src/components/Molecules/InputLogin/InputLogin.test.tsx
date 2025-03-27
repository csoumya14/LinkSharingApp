import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputLogin } from './InputLogin';
import { useForm } from 'react-hook-form';
import { vi } from 'vitest';

type TestFormValues = {
  email: string;
};

describe('InputLogin component', () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const methods = useForm<TestFormValues>();
    return <form>{children(methods)}</form>;
  };
});
