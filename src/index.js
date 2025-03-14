import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter  } from 'react-router-dom'; // Remplacez BrowserRouter par HashRouter
import './index.css';
import App from './App';
import { AccueilProvider } from './AccueilContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
     <AccueilProvider> {/* Enveloppez l'application avec le fournisseur de contexte */}
      <App />
    </AccueilProvider>
  </HashRouter>
);

reportWebVitals();