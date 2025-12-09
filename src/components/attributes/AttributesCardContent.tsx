import Attribute from './Attribute';
import CardContentWrapper from '../CardContentWrapper';
import { attributes } from '../../utils/data';

export default function AttributesCardContent() {
  return (
    <CardContentWrapper title='The Attributes'>
      <div className='flex flex-col gap-3 sm:gap-4'>
        {attributes.map((attribute) => (
          <Attribute
            key={attribute.title}
            imageSrc={attribute.imageSrc}
            title={attribute.title}
            description={attribute.description}
          />
        ))}
      </div>
    </CardContentWrapper>
  );
}
