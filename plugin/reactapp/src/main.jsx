// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import ImageRecognition from './plugins/ImageRecognition.jsx';
// import GestureRecognition from './components/GestureRecognition.jsx';

// // import 'regenerator-runtime';

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   // <React.StrictMode>
// //     <App />
// //   // </React.StrictMode>,
// // )


// const imageRecognitionEle = document.querySelector('#image-recognition-plugin');
// if (imageRecognitionEle) {
//   ReactDOM.createRoot(imageRecognitionEle).render(
//     <ImageRecognition />
//   )
// }

// const gestureRecognitionEle = document.querySelector('#gesture-recognition-plugin');
// if (gestureRecognitionEle) {
//   ReactDOM.createRoot(gestureRecognitionEle).render(
//     <GestureRecognition />
//   )
// }


import  'regenerator-runtime/runtime';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
