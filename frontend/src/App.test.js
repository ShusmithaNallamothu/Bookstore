import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeContext } from 'path-to-your-theme-context'; // Replace with the actual path

// Mock the context
jest.mock('path-to-your-theme-context', () => ({
  ...jest.requireActual('path-to-your-theme-context'),
  useContext: jest.fn(),
}));

test('renders learn react link', () => {
  // Provide a mock value for the context
  ThemeContext.useContext.mockReturnValue({
    // Your mock context value
    // For example:
    theme: 'light',
  });

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
