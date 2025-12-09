import CardContentWrapper from '../CardContentWrapper';
import SocialsLink from './SocialsLink';
import { socialLinks } from '../../utils/data';

export default function CreditsCardContent() {
  return (
    <CardContentWrapper title='The Credits'>
      <span className='text-justify'>
        Looking for the missing member of your party? Are you in need of a
        skilled Full Stack Sorcerer to help you conquer your next coding quest?
        Look no further! I'm ready to bring my magic to your team.
      </span>
      <div className='flex flex-col items-center gap-6 pt-4'>
        {socialLinks.map((link) => (
          <SocialsLink
            key={link.platformName}
            url={link.url}
            iconSrc={link.iconSrc}
            platformName={link.platformName}
            displayName={link.displayName}
          />
        ))}
      </div>
    </CardContentWrapper>
  );
}
