"use client";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const faceDetection = () => {

  const codeToCopy = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Vite + React</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </body>
  </html>`
  return (
    <div>
      <div class="mx-auto max-w-screen">
        <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          <img
            src="https://www.cpomagazine.com/wp-content/uploads/2021/02/facial-recognition-systems-scan-23-million-people-at-us-borders-come-up-with-zero-imposters.jpg"
            alt="Gesture Recognition Image"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div> */}

          <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
            <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Face Detection
            </h1>
            <p class="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">

            </p>
          </div>
        </section>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <h3 className="text-6xl p-10 font-medium text-white">
            Face Detection
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            Face Detection is a computer vision task that involves automatically identifying and locating human faces within digital images or videos.
          </p>
        </div>

        <div className="place-content-center">
          <CopyBlock
            text={codeToCopy}
            language={'html'}
            theme={dracula}
            showLineNumbers={true}
            wrapLongLines={true}
          />
        </div>
      </div>
    </div>
  );
};

export default faceDetection;
