type SocialsLinkProps = {
  url: string;
  iconSrc: string;
  platformName: string;
  displayName: string;
};

export default function SocialsLink({
  url,
  iconSrc,
  platformName,
  displayName,
}: SocialsLinkProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-4 text-black border border-[#7C3AED] rounded-md p-2 hover:bg-white w-[90%]'
    >
      <img src={iconSrc} className='w-10' />
      <div className='text-black'>
        <p className='font-bold'>{platformName}</p>
        <p>{displayName}</p>
      </div>
    </a>
  );
}
