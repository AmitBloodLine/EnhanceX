import React from 'react'
import SpeechRecognitionPlugin from './components/SpeechRecognition';
import GestureRecognition from './components/GestureRecognition';
import ModeratorPlugin from './components/ToxicityClassification';
import ImageClassification from './components/ImageClassification';

const App = () => {
  return (
    <div>
      {/* <SpeechRecognitionPlugin /> */}
      {/* <GestureRecognition /> */}
      {/* <ModeratorPlugin/> */}
      <ImageClassification/>
    </div> 
  )
}

export default App;