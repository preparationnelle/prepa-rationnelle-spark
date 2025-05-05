
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPostHog } from './integrations/posthog/client.ts'

// Initialiser PostHog avant le rendu de l'application
try {
  console.log('Initializing PostHog from main.tsx');
  initPostHog();
} catch (error) {
  console.error('Failed to initialize PostHog in main:', error);
}

createRoot(document.getElementById("root")!).render(<App />);
