type PlayerTraitProps = {
  iconSrc: string;
  label: string;
  value: string;
};

export default function PlayerTrait({
  iconSrc,
  label,
  value,
}: PlayerTraitProps) {
  return (
    <p>
      <img src={iconSrc} className='w-6 sm:w-8 inline mr-1' />{' '}
      <span className='font-bold'>{label}:</span> <span>{value}</span>
    </p>
  );
}
