export default function MainQuestsCardContent() {
  return (
    <div className='flex flex-col gap-6 w-full h-full pt-8 px-4'>
      <span className='font-bold text-4xl text-center'>The Main Quests</span>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/active-quest.png' className='w-16 pt-1' />
            <div>
              <p className='font-bold'>Software Developer</p>
              <p className='text-gray-500'>
                Zimple | Helsinki | 2023 - Present
              </p>
              <p>
                Wielded <strong>Front End</strong> spells to elevate{' '}
                <strong>UX</strong>. Forged and optimized <strong>APIs</strong>{' '}
                on the <strong>Back End</strong>, eliminating integration
                bottlenecks. Implemented rigorous <strong>Testing</strong>{' '}
                strategies, stabilizing the application. Optimized{' '}
                <strong>Database</strong> interactions for enhanced speed.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/completed-quest.png' className='w-16 pt-2' />
            <div>
              <p className='font-bold'>Full Stack Developer Trainee</p>
              <p className='text-gray-500'>
                Integrify | Helsinki | 2022 - 2023
              </p>
              <p>
                Completed an intensive training quest, mentored by industry
                elders. Mastered the arts of <strong>Typescript</strong>,{' '}
                <strong>React</strong>, <strong>Node.js</strong>,{' '}
                <strong>PostgreSQL</strong> and <strong>REST</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
