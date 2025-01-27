import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionButtons from './ActionButtons';

describe('ActionButtons', () => {
  it('renders the "Commencer" button with correct link', () => {
    render(<ActionButtons />);
    const commencerButton = screen.getByRole('link', { name: /🚀 Commencer/i });
    expect(commencerButton).toBeInTheDocument();
    expect(commencerButton).toHaveAttribute('href', '/selection');
  });

  it('renders the "Historique" button with correct link', () => {
    render(<ActionButtons />);
    const historiqueButton = screen.getByRole('link', {
      name: /📜 Historique/i,
    });
    expect(historiqueButton).toBeInTheDocument();
    expect(historiqueButton).toHaveAttribute('href', '/historique');
  });

  it('has the correct styles for buttons', () => {
    render(<ActionButtons />);
    const commencerButton = screen.getByRole('link', { name: /🚀 Commencer/i });
    const historiqueButton = screen.getByRole('link', {
      name: /📜 Historique/i,
    });

    expect(commencerButton).toHaveClass('hover:scale-110');
    expect(historiqueButton).toHaveClass('hover:scale-110');
  });
});
