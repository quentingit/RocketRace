import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoRaceScreen from './NoRaceScreen';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const mockRouter: AppRouterInstance = {
  push: vi.fn(), // Mock spy function
  replace: vi.fn(),
  back: vi.fn(),
  prefetch: vi.fn().mockResolvedValue(undefined),
  forward: vi.fn(),
  refresh: vi.fn(),
};

describe('NoRaceScreen', () => {
  it('renders the heading and description', () => {
    render(<NoRaceScreen router={mockRouter} />);

    expect(screen.getByText(/Pas de Course Trouvée !/i)).toBeInTheDocument();

    expect(
      screen.getByText(
        /La course que vous cherchez n'existe pas dans ce système solaire !/i
      )
    ).toBeInTheDocument();
  });

  it('calls router.push when the button is clicked', () => {
    render(<NoRaceScreen router={mockRouter} />);

    const button = screen.getByRole('button', { name: /Retour à l'Accueil/i });
    fireEvent.click(button);

    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });
});
