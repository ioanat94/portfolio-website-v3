export default function AttributesCardContent() {
  return (
    <div className='flex flex-col gap-6 w-full h-full py-6 px-4'>
      <span className='font-bold text-4xl text-center'>The Attributes</span>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/quick-learner.png' className='w-16' />
            <div>
              <p className='font-bold'>Swift Scholar</p>
              <p>
                Possesses swift knowledge acquisition, achieving rapid mastery
                of new arcane systems.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/problem-solver.png' className='w-16 pt-1.5' />
            <div>
              <p className='font-bold'>Master Alchemist</p>
              <p>
                Creates stable and efficient solutions from complex problems,
                transforming chaos into order.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/team-player.png' className='w-16 pt-1.5' />
            <div>
              <p className='font-bold'>Oathsworn Ally</p>
              <p>
                Strong commitment and dedication to collective success and
                securing the objective.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-start gap-4'>
            <img src='/adaptable.png' className='w-16 pt-1.5' />
            <div>
              <p className='font-bold'>Polymorph</p>
              <p>
                Ability to shift forms to meet the demands of any quest or
                dungeon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
