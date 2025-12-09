type CardContentWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export default function CardContentWrapper({
  children,
  title,
}: CardContentWrapperProps) {
  return (
    <div className='flex flex-col w-full h-full pt-6 sm:pt-8 px-4 gap-2 sm:gap-4 text-sm sm:text-lg'>
      <span className='font-bold text-3xl sm:text-4xl text-center'>
        {title}
      </span>
      {children}
    </div>
  );
}
