import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
