import { useRef, useState } from 'react';

import type { CardType } from '../utils/types';
import ScratchableArea from './ScratchableArea';

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
    <div className='w-full h-full bg-[#0d0f12]'>
      <div
        className='w-full h-full min-w-[225px] min-h-[300px] flex items-center justify-center rounded-lg bg-white text-black cursor-pointer select-none brightness-90 hover:brightness-100 transition-all'
        onClick={openModal}
      >
        {type
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </div>

      {isOpen && (
        <dialog ref={dialogRef} className='modal' onClose={closeModal}>
          <div className='modal-box bg-[#0d0f121a] shadow-none overflow-hidden px-2 py-4 sm:p-8'>
            <ScratchableArea cardName={type} />
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
