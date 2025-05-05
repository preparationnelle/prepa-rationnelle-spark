
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// More detailed logging for application startup
console.log('Starting application... Environment:', import.meta.env.MODE);

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

