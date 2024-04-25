"use client";
import React from "react";
import { CopyBlock, dracula } from 'react-code-blocks';

const GesturePage = () => {

  const codeToCopy = `<div id="gesture-recognition-plugin"></div>
<script src="main.js"></script>`

  return (
    <div>
      <div
        className="bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: `url('https://www.econsight.com/wp-content/uploads/2022/12/gesture-recognition.jpg')`,
        }}
      ></div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-6xl p-10 font-medium text-white">
            Gesture Recognition
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            Gesture recognition is a technology that enables computers or
            machines to interpret human gestures as commands or input. It
            involves capturing, analyzing, and understanding gestures made by
            humans using cameras, sensors, or other input devices. These
            gestures can include movements of the hands, body, face.
          </p>
        </div>
        <div className="col-span-8 p-10">
          <CopyBlock
          
            text={codeToCopy}
            language={'html'}
            showLineNumbers={true}
            theme={dracula}
            wrapLines
          />
        </div>
      </div>
    </div>
  );
};

export default GesturePage;
