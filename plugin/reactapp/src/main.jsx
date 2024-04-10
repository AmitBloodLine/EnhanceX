import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageRecognition from './plugins/ImageRecognition.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


const imageRecognitionEle = document.querySelector('#image-recognition-plugin');
if (imageRecognitionEle) {
  ReactDOM.createRoot(imageRecognitionEle).render(
    <ImageRecognition />
  )
}