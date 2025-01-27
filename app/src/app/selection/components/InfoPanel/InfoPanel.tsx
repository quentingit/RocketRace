import React from 'react';

const InfoPanel = ({
  numberRockets,
  selectedRocketNames,
}: {
  numberRockets: number;
  selectedRocketNames: string;
}) => (
  <div className="text-lg font-pixel text-neon-blue mb-10 text-center animate-crt-flicker">
    <p>Total Fusées : {numberRockets}</p>
    <p>
      Sélectionnées :{' '}
      <span className="text-neon-yellow">{selectedRocketNames}</span>
    </p>
  </div>
);

export default InfoPanel;
