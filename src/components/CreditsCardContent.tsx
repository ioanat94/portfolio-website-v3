export default function CreditsCardContent() {
  return (
    <div className='flex flex-col gap-4 w-full h-full pt-8 px-4'>
      <span className='font-bold text-4xl text-center'>The Credits</span>
      <span className='text-justify'>
        Looking for the missing member of your party? Are you in need of a
        skilled Full Stack Sorcerer to help you conquer your next coding quest?
        Look no further! I'm ready to bring my magic to your team.
      </span>
      <div className='flex flex-col items-center gap-6 pt-4'>
        <a
          href='https://www.linkedin.com/in/ioana-tiplea/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-4 text-black border border-[#7C3AED] rounded-md p-2 hover:bg-white w-[90%]'
        >
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'
            className='w-10'
          />
          <div className='text-black'>
            <p className='font-bold'>LinkedIn</p>
            <p>linkedin.com/in/ioana-tiplea</p>
          </div>
        </a>
        <a
          href='https://github.com/ioanat94'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-4 text-black border border-[#7C3AED] rounded-md p-2 hover:bg-white w-[90%]'
        >
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
            className='w-10'
          />
          <div className='text-black'>
            <p className='font-bold'>GitHub</p>
            <p>github.com/ioanat94</p>
          </div>
        </a>
        <a
          href='mailto:ioanatiplea94@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-4 text-black border border-[#7C3AED] rounded-md p-2 hover:bg-white w-[90%]'
        >
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg'
            className='w-10'
          />
          <div className='text-black'>
            <p className='font-bold'>Email</p>
            <p>ioanatiplea94@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
}
