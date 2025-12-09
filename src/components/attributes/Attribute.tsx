type AttributeProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export default function Attribute({
  imageSrc,
  title,
  description,
}: AttributeProps) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-start gap-4'>
        <img
          src={imageSrc}
          className={`w-16 ${
            imageSrc.includes('quick-learner') ? 'pt-0' : 'pt-2'
          }`}
        />
        <div>
          <p className='font-bold'>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
