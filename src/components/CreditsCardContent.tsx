type CreditsCardContentProps = {
  isMini?: boolean;
};

export default function CreditsCardContent({
  isMini,
}: CreditsCardContentProps) {
  return (
    <div
      className={isMini ? 'scale-75 origin-top w-full h-full' : ''}
      style={
        isMini ? { maxWidth: 200, maxHeight: 120, overflow: 'hidden' } : {}
      }
    >
      You have revealed the credits card content!
    </div>
  );
}
