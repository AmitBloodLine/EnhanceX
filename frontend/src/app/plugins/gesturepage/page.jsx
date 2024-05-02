"use client";
import React from "react";
import { CopyBlock, dracula } from 'react-code-blocks';

const GesturePage = () => {

  const codeToCopy = `<div id="gesture-recognition-plugin"></div>
<script src="main.js"></script>`

  return (
    <div>
      <div class="mx-auto max-w-screen">
          <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <img
              src="https://images.unsplash.com/photo-1705087057975-745ab6bf9086?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt="Photo by Fakurian Design"
              class="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

            <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
              <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>
              <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
                Content goes here
              </p>
            </div>
          </section>
        </div>
      <div className="grid grid-cols-2">
        <div className="">
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
    </div>
  );
};

export default GesturePage;
