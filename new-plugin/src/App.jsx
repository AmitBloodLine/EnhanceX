import React from 'react'
import SpeechRecognitionPlugin from './components/SpeechRecognition';
import GestureRecognition from './components/GestureRecognition';
import ModeratorPlugin from './components/ToxicityClassification';
// import TextToxicity from './components/TextToxicity';

const App = () => {
  return (
    <div>
      {/* <SpeechRecognitionPlugin /> */}
      {/* <GestureRecognition /> */}
      <ModeratorPlugin/>
    </div> 
  )
}

export default App;