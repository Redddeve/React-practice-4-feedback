import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from 'styles/GlobalStyles';
import App from 'App';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
