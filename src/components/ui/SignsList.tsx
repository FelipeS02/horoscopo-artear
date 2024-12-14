import { FC, memo } from 'react';
import { ZodiacSign } from '@/models/zodiacSign';
import SignsCard from './SignsCard';
import ListBottomBlur from '../ui/ListBottomBlur';
import { SearchX } from 'lucide-react';
import '@/styles/components/signs-list.css';

export interface SignsListProps {
  signs: ZodiacSign[];
  view?: 'list' | 'grid';
}

const SignsList: FC<SignsListProps> = memo(function SignsList({
  signs,
  view = 'grid',
}) {
  if (signs?.length === 0)
    return (
      <div
        className='signs-list__not-found'
        data-testid='not-found-screen'
        aria-label='No signs found'
      >
        <SearchX size={100} strokeWidth={1} />
        <p style={{ fontSize: '2rem' }}>No se ha encontrado ningún resultado</p>
      </div>
    );

  return (
    <div className='signs-list__container'>
      <div className='signs-list__wrapper' data-view={view}>
        {signs.map((sign) => (
          <SignsCard {...sign} view={view} key={`sign-${sign.id}`} />
        ))}
      </div>
      <ListBottomBlur />
    </div>
  );
});

export default SignsList;
