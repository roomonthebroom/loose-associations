import React from 'react';
import InfoModal from '../modals/InfoModal';
import { GAME_TITLE } from '../../lib/constants';

function Header() {
  return (
    <header>
      <h1 className="font-space-mono">{GAME_TITLE}</h1>
      <span className="mt-4">
        <InfoModal />
      </span>
    </header>
  );
}

export default Header;
