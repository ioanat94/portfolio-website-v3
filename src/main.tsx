import './index.css';

import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

document.fonts.ready.then(() => {
  document.body.classList.add('font-loaded');
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
