export default function EquipmentCardContent() {
  return (
    <div className='flex flex-col gap-4 w-full h-full py-6 px-4'>
      <span className='font-bold text-4xl text-center'>The Equipment</span>
      <span className='text-justify'>
        A Full Stack Sorcerer's inventory is vast and ever-expanding, which is
        why one should always use the tools best suited for the task at hand.
        Below is a selection of my most commonly equipped tools.
      </span>
      <div className='grid grid-cols-2 gap-y-4 pt-1'>
        <div className='flex flex-col items-center gap-1'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
            className='w-16'
          />
          <p>Typescript</p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
            className='w-16'
          />
          <div>React</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
            className='w-16'
          />
          <div>Node.js</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
            className='w-16'
          />
          <div>PostgreSQL</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg'
            className='w-16'
          />
          <div>Vitest</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg'
            className='w-16'
          />
          <div>Google Cloud</div>
        </div>
      </div>
    </div>
  );
}
