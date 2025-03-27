import {renderWithProviders,screen } from './utils/test-utils';
import App from './App';

describe('App', () => {
  it('renders', () => {
    renderWithProviders(<App />);
    screen.getAllByText('Login').forEach((element) => {
      expect(element).toBeVisible();
    })
  });
});
