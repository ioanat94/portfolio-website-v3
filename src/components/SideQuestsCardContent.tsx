type SideQuestsCardContentProps = {
  isMini?: boolean;
};

export default function SideQuestsCardContent({
  isMini,
}: SideQuestsCardContentProps) {
  return (
    <div
      className={isMini ? 'scale-75 origin-top w-full h-full' : ''}
      style={
        isMini ? { maxWidth: 200, maxHeight: 120, overflow: 'hidden' } : {}
      }
    >
      You have revealed the side quests card content!
    </div>
  );
}
