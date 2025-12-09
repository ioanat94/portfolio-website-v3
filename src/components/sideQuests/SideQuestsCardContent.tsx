import CardContentWrapper from '../CardContentWrapper';
import SideQuest from './SideQuest';
import { sideQuests } from '../../utils/data';

export default function SideQuestsCardContent() {
  return (
    <CardContentWrapper title='The Side Quests'>
      <div className='flex flex-col gap-4'>
        {sideQuests.map((quest) => (
          <SideQuest
            key={quest.title}
            imageSrc={quest.imageSrc}
            title={quest.title}
            description={quest.description}
          />
        ))}
      </div>
    </CardContentWrapper>
  );
}
