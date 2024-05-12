import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ToxicityPlugin from './ToxicityClassification.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


const toxicityElement = document.getElementById('toxicity-plugin');

if (toxicityElement) {

  let inputElement = document.getElementById('text-input');
  let buttonElement = document.getElementById('trigger');
  let outputElement = document.getElementById('output');

  let innerHTML = { __html: toxicityElement.innerHTML };

  ReactDOM.createRoot(toxicityElement).render(
    <ToxicityPlugin
      inputElement={inputElement}
      buttonElement={buttonElement}
      outputElement={outputElement}
    >
      <div dangerouslySetInnerHTML={innerHTML} />
    </ToxicityPlugin>
  );
}