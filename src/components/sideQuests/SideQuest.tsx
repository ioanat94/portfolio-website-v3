type SideQuestProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function SideQuest({
  imageSrc,
  title,
  description,
}: SideQuestProps) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-start gap-4'>
        <img src={imageSrc} className='w-16 pt-2' />
        <div>
          <p className='font-bold text-base sm:text-lg'>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
