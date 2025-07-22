import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Changed import to default export
import './index.css';
import i18n from './i18n'; // Import your i18n configuration
import { I18nextProvider } from 'react-i18next';

// Ensure the import is correct
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
