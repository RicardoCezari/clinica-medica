import React from 'react';
import ReactDOM from 'react-dom/client'; // Altere para 'react-dom/client' no React 18
import App from './App';
import './index.css';

// Crie a raiz usando o createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o App usando root.render()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
