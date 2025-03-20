import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Utilisez BrowserRouter
import './index.css';
import App from './App';
import { AccueilProvider } from './AccueilContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/orthosto"> {/* Ajoutez la basename */}
    <AccueilProvider>
      <App />
    </AccueilProvider>
  </BrowserRouter>
);

reportWebVitals();