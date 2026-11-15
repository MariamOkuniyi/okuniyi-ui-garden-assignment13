import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the UI Garden component library', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /UI Garden — React Component Library/i,
    }),
  ).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /Primary Button/i })).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /Disabled Button/i })).toBeDisabled();
});
