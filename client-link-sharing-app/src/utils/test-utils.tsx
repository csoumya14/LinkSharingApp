// test-utils.tsx
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AuthProvider } from '../context/AuthContext'; // ✅ make sure this is a value import
import { AppProvider } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </AppProvider>
    </AuthProvider>,
  );
};

export * from '@testing-library/react';
export { renderWithProviders };
