import './App.css';

import Card from './components/Card';
import type { CardType } from './utils/types';
import { useState } from 'react';

export default function App() {
  const [revealedCards, setRevealedCards] = useState<CardType[]>([]);
  const cardTypes = [
    'player',
    'equipment',
    'attributes',
    'main-quests',
    'side-quests',
    'credits',
  ] as const;

  return (
    <div className='flex flex-col gap-12'>
      <h1 className='hidden-until-font-loaded text-center'>
        Pick a card to scratch!
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {cardTypes.map((type) => (
          <Card
            key={type}
            type={type}
            revealedCards={revealedCards}
            setRevealedCards={setRevealedCards}
          />
        ))}
      </div>
    </div>
  );
}
