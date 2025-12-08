export default function SideQuestsCardContent() {
  return (
    <div className='flex flex-col gap-6 w-full h-full pt-8 px-4'>
      <span className='font-bold text-4xl text-center'>The Side Quests</span>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/gaming.png' className='w-16 pt-2' />
            <div>
              <p className='font-bold'>The Chronicler of Worlds</p>
              <p>
                Engaging in simulation and lore exploration across vast digital
                realms to hone critical thinking and rapid decision-making.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/cooking.png' className='w-16 pt-2' />
            <div>
              <p className='font-bold'>The Chef of the Hearth</p>
              <p>
                Proficient in resource management and elemental composition,
                crafting high-yield restorative provisions.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/exercise.png' className='w-16' />
            <div>
              <p className='font-bold'>The Oath of Iron</p>
              <p>
                Focused on continuous strength conditioning and discipline,
                maximizing Constitution and Endurance for long campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
