import React, { Suspense, useRef, useState } from 'react';

import type { CardType } from '../utils/types';
import ScratchableArea from './ScratchableArea';
import { match } from 'ts-pattern';

type CardProps = {
  type: CardType;
  revealedCards: CardType[];
  setRevealedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

export default function Card({
  type,
  revealedCards,
  setRevealedCards,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const isRevealed = revealedCards.includes(type);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      dialogRef.current?.showModal();
    }, 0);
  };

  const closeModal = () => {
    setIsOpen(false);
    dialogRef.current?.close();
  };

  return (
    <div className='flex justify-center'>
      {/* Small card */}
      <div
        className={`aspect-3/4 w-[250px] flex flex-col items-center justify-center gap-4 rounded-lg border border-[#7C3AED] shadow-lg transition-all duration-200 cursor-pointer select-none  hover:shadow-purple-700/40 hover:border-purple-500 ${
          isRevealed ? 'bg-white text-black' : 'bg-[#23272F] text-[#E5E7EB]'
        }`}
        onClick={openModal}
      >
        {isRevealed ? (
          <img
            src={`/${type}-mini.png`}
            alt={`${type} Mini Card`}
            className='w-full h-full'
          />
        ) : (
          <>
            <span className='hidden-until-font-loaded font-bold tracking-wide text-lg'>
              The{' '}
              {type
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </span>
            <div className='h-20 w-20 flex items-center justify-center'>
              <img
                src={`/${type}.svg`}
                alt={`${type} Icon`}
                className='w-20 drop-shadow-lg'
              />
            </div>
          </>
        )}
      </div>

      {isOpen && (
        <dialog ref={dialogRef} className='modal' onClose={closeModal}>
          <div className='modal-box bg-transparent shadow-none overflow-hidden px-2 py-4 sm:p-8'>
            <ScratchableArea
              title={type}
              iconSrc={`/${type}.svg`}
              setRevealedCards={setRevealedCards}
              revealedCards={revealedCards}
            >
              <Suspense fallback={<div>Loading...</div>}>
                {match(type)
                  .with('player', () => <PlayerCardContent />)
                  .with('equipment', () => <EquipmentCardContent />)
                  .with('attributes', () => <AttributesCardContent />)
                  .with('main-quests', () => <MainQuestsCardContent />)
                  .with('side-quests', () => <SideQuestsCardContent />)
                  .with('credits', () => <CreditsCardContent />)
                  .exhaustive()}
              </Suspense>
            </ScratchableArea>
          </div>
          <form
            method='dialog'
            className='modal-backdrop opacity-10'
            onClick={closeModal}
          >
            <button type='button'>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}

const PlayerCardContent = React.lazy(() =>
  import('./player/PlayerCardContent').then((module) => ({
    default: module.default,
  }))
);
const EquipmentCardContent = React.lazy(() =>
  import('./equipment/EquipmentCardContent').then((module) => ({
    default: module.default,
  }))
);
const AttributesCardContent = React.lazy(() =>
  import('./attributes/AttributesCardContent').then((module) => ({
    default: module.default,
  }))
);
const MainQuestsCardContent = React.lazy(() =>
  import('./mainQuests/MainQuestsCardContent').then((module) => ({
    default: module.default,
  }))
);
const SideQuestsCardContent = React.lazy(() =>
  import('./sideQuests/SideQuestsCardContent').then((module) => ({
    default: module.default,
  }))
);
const CreditsCardContent = React.lazy(() =>
  import('./credits/CreditsCardContent').then((module) => ({
    default: module.default,
  }))
);
