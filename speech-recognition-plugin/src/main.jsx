import regeneratorRuntime from "regenerator-runtime";
import React from 'react'
import ReactDOM from 'react-dom/client'
import SpeechRecognitionPlugin from './SpeechRecognition'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeechRecognitionPlugin />
  </React.StrictMode>,
)
