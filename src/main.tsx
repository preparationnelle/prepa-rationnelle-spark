
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// lovable-tagger annotates JSX with data-lov-id, but React rejects unknown
// props on Fragments. Silence that one warning so real errors stay visible.
if (import.meta.env.DEV) {
  const origError = console.error;
  console.error = (...args: unknown[]) => {
    const first = args[0];
    if (
      typeof first === 'string' &&
      first.includes('Invalid prop `%s` supplied to `React.Fragment`') &&
      args.includes('data-lov-id')
    ) {
      return;
    }
    origError(...args);
  };
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
