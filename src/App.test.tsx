import { render, screen } from '@testing-library/react';
import App from './App';

import { fireEvent } from '@testing-library/react';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('toggles dark mode', () => {
    render(<App />);
    const toggle = screen.getByLabelText(/toggle dark mode/i);
    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    fireEvent.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('opens and closes the modal', async () => {
    render(<App />);
    const openButtons = screen.getAllByRole('button', { name: /Create My Fragrance Now/i });
    fireEvent.click(openButtons[1]);
    const dialog = await screen.findByRole('dialog');
    expect(dialog).toBeInTheDocument();
    const closeButton = screen.getByRole('button', { name: /close/i, within: dialog });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
