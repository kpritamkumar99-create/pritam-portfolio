import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Mounting React application...');
const root = document.getElementById('root');
if (!root) console.error('Root element not found!');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
console.log('App rendered to DOM');
