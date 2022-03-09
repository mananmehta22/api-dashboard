import { render, screen } from '@testing-library/react';
import App from './App';

test("shows the NavBar", () => {
  const { container } = render(<App />);
  container.querySelector('.my-class');
});
