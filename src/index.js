import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

