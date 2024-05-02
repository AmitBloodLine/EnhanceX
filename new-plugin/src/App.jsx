import React from 'react'
import SpeechRecognitionPlugin from './components/SpeechRecognition';
import GestureRecognition from './components/GestureRecognition';
// import TextToxicity from './components/TextToxicity';

const App = () => {
  return (
    <div>
      {/* <SpeechRecognitionPlugin /> */}
      <GestureRecognition />
      {/* <TextToxicity/> */}
    </div> 
  )
}

export default App;