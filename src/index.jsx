import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './reset.css';

import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
