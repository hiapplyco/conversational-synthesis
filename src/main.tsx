import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './utils/testEmail' // Import test function for debugging

// Add error logging
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

createRoot(document.getElementById("root")!).render(<App />);
