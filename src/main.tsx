
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// More detailed logging for application startup
console.log('Starting application... Environment:', import.meta.env.MODE);
console.log('Node version:', process.versions?.node || 'unknown');
console.log('Package versions:', {
  vite: import.meta.env.VITE_VERSION || 'unknown',
  react: React?.version || 'unknown'
});

// Create the React root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find root element in the DOM");
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);
console.log('React root created successfully');

// Render the application
root.render(<App />);
console.log('App rendered successfully');
