import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { LenisProvider, StoreProvider } from './components/providers';
import './styles/index.css';
import  StarsBackground  from './components/ui/StarsBackground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LenisProvider>
      <StarsBackground />
      <StoreProvider>
        <App />
      </StoreProvider>
    </LenisProvider>
  </StrictMode>
);
