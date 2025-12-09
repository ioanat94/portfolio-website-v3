import CardContentWrapper from '../CardContentWrapper';
import PlayerTrait from './PlayerTrait';
import { playerTraits } from '../../utils/data';

export default function PlayerCardContent() {
  return (
    <CardContentWrapper title='The Player'>
      <div className='flex flex-col gap-3 text-sm sm:text-lg'>
        <img
          src='/me.png'
          alt='Player Avatar'
          className='h-min rounded-2xl self-center w-40 sm:w-48'
        />
        <div className='flex flex-col items-start justify-start gap-2'>
          {playerTraits.map((trait) => (
            <PlayerTrait
              key={trait.label}
              iconSrc={trait.iconSrc}
              label={trait.label}
              value={trait.value}
            />
          ))}
        </div>
      </div>
    </CardContentWrapper>
  );
}
