import './App.css';

import Card from './components/Card';
import type { CardType } from './utils/types';
import { useState } from 'react';

function App() {
  const [revealedCards, setRevealedCards] = useState<CardType[]>([]);
  const cardTypes = [
    'the player',
    'the inventory',
    'the attributes',
    'the quest log',
    'the side quests',
    'the credits',
  ] as const;

  return (
    <div className='flex flex-col gap-6 '>
      <h2>Pick a card to scratch!</h2>
      <div className='grid grid-cols-3 gap-6'>
        {cardTypes.map((type) => (
          <div
            key={type}
            className='rounded cursor-pointer h-[300px] flex items-center justify-center hover:scale-105 transition-transform bg-[#23272f]'
            onClick={() => {
              if (!revealedCards.includes(type)) {
                setRevealedCards([...revealedCards, type]);
              }
            }}
          >
            <Card type={type} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
