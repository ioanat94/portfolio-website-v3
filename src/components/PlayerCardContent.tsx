export default function PlayerCardContent() {
  return (
    <div className='flex flex-col gap-4 w-full h-full pt-8 px-4'>
      <span className='font-bold text-4xl text-center'>The Player</span>
      <div className='flex flex-col gap-3'>
        <img
          src='/me.png'
          alt='Player Avatar'
          className='w-48 h-min rounded-2xl self-center'
        />
        <div className='flex flex-col items-start justify-start gap-2'>
          <p>
            <img src='/name.png' className='w-8 inline mr-1' />{' '}
            <span className='font-bold'>Name:</span> <span>Ioana Tiplea</span>
          </p>
          <p>
            <img src='/base.png' className='w-8 inline mr-1' />{' '}
            <span className='font-bold'>Base:</span> <span>Finland</span>
          </p>
          <p>
            <img src='/class.png' className='w-8 inline mr-1' />{' '}
            <span className='font-bold'>Class:</span>{' '}
            <span>Full Stack Sorcerer</span>
          </p>
          <p>
            <img src='/companion.png' className='w-8 inline mr-1' />{' '}
            <span className='font-bold'>Companion:</span>{' '}
            <span>Feline Debugger</span>
          </p>
          <p>
            <img src='/backstory.png' className='w-8 inline mr-1' />{' '}
            <span className='font-bold'>Backstory:</span>{' '}
            <span>
              A skilled and ambitious developer, adept at conjuring elegant
              solutions to complex problems, and always ready to embark on new
              coding quests.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
