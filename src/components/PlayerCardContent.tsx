type PlayerCardContentProps = {
  isMini?: boolean;
};

export default function PlayerCardContent({ isMini }: PlayerCardContentProps) {
  return (
    <div
      className={` ${isMini ? 'scale-75 origin-top w-full h-full' : ''}`}
      style={
        isMini ? { maxWidth: 200, maxHeight: 120, overflow: 'hidden' } : {}
      }
    >
      You have revealed the player card content!
    </div>
  );
}
