import { useState } from 'react';
import useSigns from './hooks/useSigns';
import { Header } from './components/ui/Header';
import SignsList, { SignsListProps } from './components/ui/SignsList';
import { ListFilters } from './components/ui/ListFilters';
import {
  SignsSection,
  SignsSectionContent,
  SignsSectionTitle,
} from './components/layout/SignsSection';
import SignsCard from './components/ui/SignsCard';
import Loader from './components/ui/Loader';
import './styles/pages/home.css';
import MainWrapper from './components/layout/MainWrapper';

function App() {
  const { todaySign, filteredSigns, filtered, loading } = useSigns();
  const [view, setView] = useState<SignsListProps['view']>('grid');

  return (
    <MainWrapper>
      <Header />
      <ListFilters view={view} setView={setView} disabled={loading} />

      {!loading ? (
        <main className='home__container'>
          {!filtered ? (
            <SignsSection id='today-horoscope' aria-label='Today horoscope'>
              <SignsSectionContent>
                <SignsSectionTitle>Horóscopo del dia</SignsSectionTitle>
                <SignsCard
                  {...todaySign}
                  size='lg'
                  variant='primary'
                  view='list'
                />
              </SignsSectionContent>
            </SignsSection>
          ) : null}

          <SignsSection id='all-signs' aria-label='All the signs'>
            <SignsSectionContent>
              <SignsSectionTitle>
                {!filtered ? 'Todos los signos' : 'Resultado de la busqueda'}
              </SignsSectionTitle>
              <SignsList signs={filteredSigns} view={view} key={view} />
            </SignsSectionContent>
          </SignsSection>
        </main>
      ) : (
        <Loader />
      )}
    </MainWrapper>
  );
}

export default App;
