import { FC } from 'react';
import { ZodiacSign } from '@/models/zodiacSign';
import { api_url } from '@/utils/config';
import { SignsListProps } from './SignsList';
import '@/styles/components/signs-card.css';

interface SignsCardProps extends ZodiacSign, Pick<SignsListProps, 'view'> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}

const SignsCard: FC<SignsCardProps> = ({
  image,
  name,
  prediction,
  variant = 'secondary',
  view = 'grid',
  size = 'md',
}) => {
  const isGridItem = view === 'grid';

  return (
    <article
      className='signs-card__container'
      data-variant={variant}
      data-size={size}
      data-view={view}
    >
      <div className='signs-card__figure'>
        {isGridItem ? <h4 className='signs-card__heading'>{name}</h4> : null}
        <div className='signs-card__image'>
          <img src={`${api_url}/${image}`} alt={`${name}-image`} />
        </div>
      </div>
      <div className='signs-card__info'>
        {!isGridItem ? <h4 className='signs-card__heading'>{name}</h4> : null}
        <p className='signs-card__subheading'>{`“${prediction}”`}</p>
      </div>
    </article>
  );
};

export default SignsCard;
