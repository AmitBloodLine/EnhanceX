"use client";
import React from "react";
import { CopyBlock, dracula } from 'react-code-blocks';

const gestureRecognition = () => {

  return (
    <div>
      <div class="mx-auto max-w-screen">
        <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src="https://dxc.com/content/dam/dxc/projects/dxc-com/us/images/services/security/csam/2023/AdobeStock_610500949.jpeg"
            alt="Gesture Recognition Image"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div> */}

          <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
            <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Gesture Recognition
            </h1>
            <p class="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">

            </p>
          </div>
        </section>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
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
        <div className="col-span-8">
          <div className="col-span-8 p-10">
            <div className="mockup-code p-10">
              <CopyBlock
                text={`<div id="toxicity-plugin">
  <input id="text-input" type="text" />
  <button id="trigger">Make Prediction</button>
  <p id="output"></p>
</div>
<script type="module" src="http://localhost:5000/script.js"></script>`}
                language={'html'}
                theme={dracula}
                showLineNumbers={true}
                wrapLongLines={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gestureRecognition;
