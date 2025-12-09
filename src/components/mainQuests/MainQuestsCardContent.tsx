import CardContentWrapper from '../CardContentWrapper';
import MainQuest from './MainQuest';

export default function MainQuestsCardContent() {
  return (
    <CardContentWrapper title='The Main Quests'>
      <div className='flex flex-col gap-2'>
        <MainQuest
          imageSrc='/active-quest.png'
          title='Software Developer'
          company='Zimple'
          period='2023 - Present'
          description={
            <>
              Wielded <strong>Front End</strong> spells to elevate{' '}
              <strong>UX</strong>. Forged and optimized <strong>APIs</strong> on
              the <strong>Back End</strong>, eliminating integration
              bottlenecks. Implemented rigorous <strong>Testing</strong>{' '}
              strategies, stabilizing the application. Optimized{' '}
              <strong>Database</strong> interactions for enhanced speed.
            </>
          }
        />
        <MainQuest
          imageSrc='/completed-quest.png'
          title='Full Stack Developer Trainee'
          company='Integrify'
          period='2022 - 2023'
          description={
            <>
              Completed an intensive training quest, mentored by industry
              elders. Mastered the arts of <strong>Typescript</strong>,{' '}
              <strong>React</strong>, <strong>Node.js</strong>,{' '}
              <strong>PostgreSQL</strong> and <strong>REST</strong>.
            </>
          }
        />
      </div>
    </CardContentWrapper>
  );
}
