import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('app')! as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
