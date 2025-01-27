import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderText from './HeaderText';

describe('HeaderText', () => {
  it('renders the title correctly', () => {
    render(<HeaderText />);
    const title = screen.getByRole('heading', { name: /🚀 Rocket Race/i });
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-neon-blue animate-pulse');
  });

  describe('HeaderText', () => {
    it('has the correct structure and animations', () => {
      render(<HeaderText />);

      const description = screen.getByText((content, element) => {
        const hasText = (node: Element) =>
          node.textContent ===
          'Bienvenue dans Rocket Race ! Sélectionnez vos fusées préférées et suivez leur course en temps réel.';
        const elementHasText = hasText(element!);
        const childrenDontHaveText = Array.from(element!.children).every(
          (child) => !hasText(child)
        );
        return elementHasText && childrenDontHaveText;
      });

      const title = screen.getByRole('heading');

      expect(title).toHaveClass('animate-crt-flicker');
      expect(description).toHaveClass('animate-slide-up');
    });
  });
});
