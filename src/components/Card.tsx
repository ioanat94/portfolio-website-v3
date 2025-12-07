import React, { Suspense, useRef, useState } from 'react';

import type { CardType } from '../utils/types';
import ScratchableArea from './ScratchableArea';
import { match } from 'ts-pattern';

type CardProps = {
  type: CardType;
};

export default function Card({ type }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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
    <div className='w-full h-full bg-[#181A20]'>
      {/* Small card */}
      <div
        className='w-full h-full min-w-[225px] min-h-[300px] flex flex-col items-center justify-center gap-4 rounded-lg bg-[#23272F] text-[#E5E7EB] cursor-pointer select-none shadow-lg border border-[#7C3AED] hover:shadow-purple-700/40 hover:border-purple-500 transition-all duration-200'
        onClick={openModal}
      >
        <span className='font-bold tracking-wide text-lg'>
          The{' '}
          {type
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </span>
        <img
          src={`/${type}.svg`}
          alt={`${type} Icon`}
          className='w-20 drop-shadow-lg'
        />
      </div>

      {isOpen && (
        <dialog ref={dialogRef} className='modal' onClose={closeModal}>
          <div className='modal-box bg-[#0d0f121a] shadow-none overflow-hidden px-2 py-4 sm:p-8'>
            <ScratchableArea title={type} iconSrc={`/${type}.svg`}>
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
  import('./PlayerCardContent').then((module) => ({
    default: module.default,
  }))
);
const EquipmentCardContent = React.lazy(() =>
  import('./EquipmentCardContent').then((module) => ({
    default: module.default,
  }))
);
const AttributesCardContent = React.lazy(() =>
  import('./AttributesCardContent').then((module) => ({
    default: module.default,
  }))
);
const MainQuestsCardContent = React.lazy(() =>
  import('./MainQuestsCardContent').then((module) => ({
    default: module.default,
  }))
);
const SideQuestsCardContent = React.lazy(() =>
  import('./SideQuestsCardContent').then((module) => ({
    default: module.default,
  }))
);
const CreditsCardContent = React.lazy(() =>
  import('./CreditsCardContent').then((module) => ({
    default: module.default,
  }))
);
