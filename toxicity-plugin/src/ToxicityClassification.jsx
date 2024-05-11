import React, { useEffect, useState } from 'react'
// import * as toxicity from '@tensorflow-models/toxicity';


const ToxicityPlugin = ({
  children
}) => {

  // const [model, setModel] = useState(null);
  let model;
  // const [text, setText] = useState('');
  const [predictions, setPredictions] = useState(null)
  let inputElement = document.getElementById('text-input');
  let outputElement = document.getElementById('output');

  useEffect(() => {
    let buttonElement = document.getElementById('trigger');
    buttonElement.disabled = true;
    buttonElement.addEventListener('click', () => predict());
    async function loadModel() {
      model = await window.toxicity.load();
      buttonElement.disabled = false;
      console.log('model loaded');
      // setModel(temp);
    }
    loadModel();
  }, []);

  async function predict() {
    console.log('predicting...');
    console.log(inputElement.value);
    const predictions = await model.classify(inputElement.value);
    console.log(predictions);
    setPredictions(predictions);
    if (predictions[6].results[0].match) {
      outputElement.innerHTML = "Toxicity detected";
    }
  }

  const displayPredictions = () => {
    if (predictions !== null) {
      return predictions.map((prediction) => (
        <div key={prediction.label}>{prediction.label}: {prediction.results[0].match ? 'Yes' : 'No'}</div>
      ));
    }
  }


  return (
    <div>
      {children}
      {displayPredictions()}

      {/* <div className='card'>
        <div className="card-body">
          <button onClick={() => predict()}>Predict</button>
          <div>
            {predictions !== null && predictions.map((prediction) => (
              <div key={prediction.label}>{prediction.label}: {prediction.results[0].match ? 'Yes' : 'No'}</div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ToxicityPlugin