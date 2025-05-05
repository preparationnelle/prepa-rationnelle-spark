
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting application...');

// Créer le root pour le rendu React
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);
console.log('React root created');

// Render the application
root.render(<App />);
console.log('App rendered');
