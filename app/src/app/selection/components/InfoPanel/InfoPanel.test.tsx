import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoPanel from './InfoPanel';

describe('InfoPanel', () => {
  it('renders the correct number of rockets', () => {
    render(
      <InfoPanel numberRockets={5} selectedRocketNames="Falcon, Apollo" />
    );

    expect(screen.getByText(/Total Fusées : 5/i)).toBeInTheDocument();
  });

  it('renders the selected rocket names', () => {
    render(
      <InfoPanel numberRockets={5} selectedRocketNames="Falcon, Apollo" />
    );

    expect(screen.getByText(/Sélectionnées :/i)).toBeInTheDocument();
    expect(screen.getByText(/Falcon, Apollo/i)).toHaveClass('text-neon-yellow');
  });

  it('renders correctly when no rockets are selected', () => {
    render(<InfoPanel numberRockets={5} selectedRocketNames="" />);

    expect(screen.getByText(/Sélectionnées :/i)).toBeInTheDocument();
    expect(screen.getByText('', { selector: 'span' })).toHaveClass(
      'text-neon-yellow'
    );
  });

  it('renders with dynamic data', () => {
    render(
      <InfoPanel numberRockets={10} selectedRocketNames="Dragon, Starship" />
    );

    expect(screen.getByText(/Total Fusées : 10/i)).toBeInTheDocument();
    expect(screen.getByText(/Dragon, Starship/i)).toHaveClass(
      'text-neon-yellow'
    );
  });
});
