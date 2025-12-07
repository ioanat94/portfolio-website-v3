type MainQuestsCardContentProps = {
  isMini?: boolean;
};

export default function MainQuestsCardContent({
  isMini,
}: MainQuestsCardContentProps) {
  return (
    <div
      className={isMini ? 'scale-75 origin-top w-full h-full' : ''}
      style={
        isMini ? { maxWidth: 200, maxHeight: 120, overflow: 'hidden' } : {}
      }
    >
      You have revealed the main quests card content!
    </div>
  );
}
