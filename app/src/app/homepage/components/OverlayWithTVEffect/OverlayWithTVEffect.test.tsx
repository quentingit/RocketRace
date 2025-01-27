import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OverlayWithTVEffect from './OverlayWithTVEffect';

describe('OverlayWithTVEffect', () => {
  it('renders the button with the default text', () => {
    render(<OverlayWithTVEffect isPoweringOn={false} onClose={() => {}} />);
    const button = screen.getByRole('button', { name: /Allumer !/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('text-neon-green');
  });

  it('renders the button with custom text', () => {
    render(
      <OverlayWithTVEffect
        isPoweringOn={false}
        onClose={() => {}}
        buttonText="Démarrer"
      />
    );
    const button = screen.getByRole('button', { name: /Démarrer/i });
    expect(button).toBeInTheDocument();
  });

  it('does not render the button when powering on', () => {
    render(<OverlayWithTVEffect isPoweringOn={true} onClose={() => {}} />);
    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });

  it('calls onClose when the button is clicked', () => {
    const mockOnClose = vi.fn();
    render(<OverlayWithTVEffect isPoweringOn={false} onClose={mockOnClose} />);

    const button = screen.getByRole('button', { name: /Allumer !/i });
    fireEvent.click(button);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('applies the powering-on animation class', () => {
    const { container } = render(
      <OverlayWithTVEffect isPoweringOn={true} onClose={() => {}} />
    );
    expect(container.firstChild).toHaveClass('animate-tv-power-on');
  });
});
