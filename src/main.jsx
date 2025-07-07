import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContent from './components/AppContent.jsx'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #333333;
    color: #ffffff;
    font-family: 'Arial', sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AppContent />
  </React.StrictMode>,
)
