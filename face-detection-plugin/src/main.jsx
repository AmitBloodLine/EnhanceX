import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const pluginElement = document.getElementById('face-detection-plugin');
if (pluginElement) {
  ReactDOM.createRoot(pluginElement).render(
    <App />
  )
}
