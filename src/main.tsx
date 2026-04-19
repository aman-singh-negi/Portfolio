import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import SmoothScroller from './components/SmoothScroller';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <SmoothScroller>
      <App />
    </SmoothScroller>
  </StrictMode>,
);
