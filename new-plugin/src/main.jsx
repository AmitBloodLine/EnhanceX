import regeneratorRuntime from "regenerator-runtime";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToxicityPlugin from "./components/ToxicityClassification.jsx";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const toxicityElement = document.getElementById('toxicity-plugin');

if (toxicityElement) {

  let inputElement = document.createElement('text-input');
  let buttonElement = document.createElement('trigger');
  let outputElement = document.createElement('output');

  let innerHTML = {__html: toxicityElement.innerHTML};

  ReactDOM.createRoot(toxicityElement).render(
    <ToxicityPlugin
      inputElement={inputElement}
      buttonElement={buttonElement}
      outputElement={outputElement}
    >
      <div dangerouslySetInnerHTML={innerHTML} />
    </ToxicityPlugin>,
    toxicityElement
  );
}