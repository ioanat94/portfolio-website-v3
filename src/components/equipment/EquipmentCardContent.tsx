import CardContentWrapper from '../CardContentWrapper';
import EquippedItem from './EquippedItem';
import { equippedItems } from '../../utils/data';

export default function EquipmentCardContent() {
  return (
    <CardContentWrapper title='The Equipment'>
      <span className='text-justify '>
        A Full Stack Sorcerer's inventory is vast and ever-expanding, which is
        why one should always use the tools best suited for the task at hand.
        Below is a selection of my most commonly equipped tools.
      </span>
      <div className='grid grid-cols-2 gap-y-4 pt-1'>
        {equippedItems.map((item) => (
          <EquippedItem
            key={item.label}
            imageSrc={item.imageSrc}
            label={item.label}
          />
        ))}
      </div>
    </CardContentWrapper>
  );
}
