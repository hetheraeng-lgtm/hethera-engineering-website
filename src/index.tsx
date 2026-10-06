import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/global.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production pages are prerendered to static HTML (scripts/prerender.js), so
// attach to that markup instead of re-rendering; `npm start` serves an empty root.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
