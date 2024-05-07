import React, { useEffect, useState } from 'react'
// import * as toxicity from '@tensorflow-models/toxicity';


const ToxicityPlugin = ({
  inputElement,
  buttonElement,
  outputElement,
  children
}) => {

  const [model, setModel] = useState(null);
  // const [text, setText] = useState('');
  const [predictions, setPredictions] = useState(null)

  useEffect(() => {
    buttonElement.onclick = predict;
    async function loadModel() {
      const model = await window.toxicity.load();
      console.log('model loaded');
      setModel(model);
    }
    loadModel();
  }, []);

  async function predict() {
    console.log('predicting');
    const predictions = await model.classify(inputElement.value);
    console.log(predictions);
    setPredictions(predictions);
    if (predictions[6].results[0].match) {
      outputElement.innerHTML = "Toxicity detected";
    }
  }


  return (
    <div>
      {children}
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