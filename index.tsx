import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Garantimos que o script só rode quando o DOM estiver pronto
const mountNode = document.getElementById('root');

if (!mountNode) {
  console.error("Erro: Elemento root não encontrado.");
} else {
  const root = ReactDOM.createRoot(mountNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}