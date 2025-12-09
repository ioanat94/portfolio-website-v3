type EquippedItemProps = {
  imageSrc: string;
  label: string;
};

export default function EquippedItem({ imageSrc, label }: EquippedItemProps) {
  return (
    <div className='flex flex-col items-center gap-1'>
      <img src={imageSrc} className='w-14 sm:w-16' />
      <p>{label}</p>
    </div>
  );
}
