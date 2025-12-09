import type React from 'react';

type MainQuestProps = {
  imageSrc: string;
  title: string;
  company: string;
  period: string;
  description: React.ReactNode;
};

export default function MainQuest({
  imageSrc,
  title,
  company,
  period,
  description,
}: MainQuestProps) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-start gap-4'>
        <img src={imageSrc} className='w-[57px] sm:w-16 pt-2' />
        <div>
          <p className='font-bold text-base sm:text-lg'>{title}</p>
          <p className='text-gray-500'>
            {company} | Helsinki | {period}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
